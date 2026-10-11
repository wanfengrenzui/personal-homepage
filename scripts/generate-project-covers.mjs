import fs from "node:fs/promises";
import sharp from "sharp";
import { projects } from "../src/data/siteData.js";

// 首页使用小图，详情页仍可使用原封面。新增或替换封面后运行此脚本。
const directory = "public/assets/images/project-covers";
await fs.mkdir(directory, { recursive: true });
const covers = {};
let before = 0;
let after = 0;
for (const project of projects) {
  const source = `public${project.cover}`;
  const metadata = await sharp(source).metadata();
  before += (await fs.stat(source)).size;
  const widths = [...new Set([480, 900, 1200].map((width) => Math.min(width, metadata.width)))];
  const variants = [];
  for (const width of widths) {
    const filename = `${project.slug}-${width}.webp`;
    const info = await sharp(source).resize({ width }).webp({ quality: 76, effort: 6 }).toFile(`${directory}/${filename}`);
    variants.push({ url: `/assets/images/project-covers/${filename}`, width: info.width, height: info.height, bytes: info.size });
  }
  const fallback = variants.find((variant) => variant.width === Math.min(900, metadata.width));
  after += fallback.bytes;
  covers[project.slug] = {
    src: fallback.url,
    srcSet: variants.map((variant) => `${variant.url} ${variant.width}w`).join(", "),
    width: fallback.width,
    height: fallback.height,
  };
}
await fs.writeFile("src/data/projectCoverImages.json", `${JSON.stringify(covers, null, 2)}\n`);
console.log(`Project covers: ${Math.round(before / 1024)} KB → ${Math.round(after / 1024)} KB (900px variants)`);
