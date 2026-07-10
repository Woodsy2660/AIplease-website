import sharp from "sharp";
import { copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "public/brand/aiplease-mark-stone-t.png");
const size = 512;
const padding = 16;

const trimmed = await sharp(source)
  .trim({ threshold: 12 })
  .png()
  .toBuffer();
const mark = await sharp(trimmed)
  .resize(size - padding * 2, size - padding * 2, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .extend({
    top: padding,
    bottom: padding,
    left: padding,
    right: padding,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

const iconPath = join(root, "app/icon.png");
const applePath = join(root, "app/apple-icon.png");
const publicPath = join(root, "public/brand/favicon-mark.png");

await sharp(mark).png().toFile(iconPath);
copyFileSync(iconPath, applePath);
copyFileSync(iconPath, publicPath);

console.log("Generated favicon icons at", iconPath);