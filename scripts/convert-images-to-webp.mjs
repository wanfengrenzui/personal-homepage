import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOTS = ["assets/images", "public/assets/images"];
const CONVERT_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 76;
const THUMB_WIDTH = 900;
const THUMB_QUALITY = 68;
const COVER_FILES = [
  "starry-sleep-project.webp",
  "chess.webp",
  "glasses.webp",
  "all-weather-cleaning-vehicle.webp",
  "mars-base.webp",
  "IKEA-robots.webp",
];

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

  const outputPath = filePath.replace(/\.(png|jpg|jpeg|webp)$/i, ".webp");
  const tempPath = outputPath === filePath ? `${outputPath}.tmp` : outputPath;

  await sharp(filePath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true, fit: "inside" })
    .webp({ quality: WEBP_QUALITY })
    .toFile(tempPath);

  if (tempPath !== outputPath) {
    await fs.rename(tempPath, outputPath);
  }

  return outputPath;
}

async function main() {
  const converted = [];
  const thumbnails = [];

  for (const root of ROOTS) {
    try {
      const files = await walk(root);
      for (const file of files) {
        if (file.includes(`${path.sep}thumbs${path.sep}`)) {
          continue;
        }

        const outputPath = await convertImage(file);
        if (outputPath) {
          converted.push(outputPath);
        }
      }

      const thumbsDir = path.join(root, "thumbs");
      await fs.mkdir(thumbsDir, { recursive: true });

      for (const file of COVER_FILES) {
        const source = path.join(root, file);
        const output = path.join(thumbsDir, file);

        try {
          await sharp(source)
            .resize({ width: THUMB_WIDTH, withoutEnlargement: true, fit: "inside" })
            .webp({ quality: THUMB_QUALITY })
            .toFile(output);
          thumbnails.push(output);
        } catch (error) {
          if (error.code !== "ENOENT") {
            throw error;
          }
        }
      }
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }
  }

  console.log(`Optimized ${converted.length} images and generated ${thumbnails.length} thumbnails.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
