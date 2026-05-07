import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOTS = ["assets/images", "public/assets/images"];
const CONVERT_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const MAX_WIDTH = 1800;
const WEBP_QUALITY = 82;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walk(fullPath);
      }
      return fullPath;
    }),
  );
  return files.flat();
}

async function convertImage(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  if (!CONVERT_EXTENSIONS.has(extension)) {
    return null;
  }

  const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  await sharp(filePath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true, fit: "inside" })
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath);
  return outputPath;
}

async function main() {
  const converted = [];

  for (const root of ROOTS) {
    try {
      const files = await walk(root);
      for (const file of files) {
        const outputPath = await convertImage(file);
        if (outputPath) {
          converted.push(outputPath);
        }
      }
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }
  }

  console.log(`Converted ${converted.length} images to webp.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
