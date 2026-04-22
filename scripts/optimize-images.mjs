import sharp from "sharp";
import { readdirSync, mkdirSync, statSync } from "fs";
import { join, resolve } from "path";

const SRC = "C:/Users/User/OneDrive/Desktop/이사꿀팁/img";
const DST = resolve("public/img/packing");

mkdirSync(DST, { recursive: true });

const files = readdirSync(SRC).filter((f) => /\.(jpe?g|png)$/i.test(f));
console.log(`Found ${files.length} source images`);

const results = [];
for (const f of files) {
  const src = join(SRC, f);
  const base = f.replace(/\.[^.]+$/, "").padStart(2, "0");
  const dst = join(DST, `packing-${base}.webp`);
  const srcStat = statSync(src);

  await sharp(src)
    .rotate() // apply EXIF orientation
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dst);

  const dstStat = statSync(dst);
  const ratio = ((1 - dstStat.size / srcStat.size) * 100).toFixed(1);
  console.log(
    `${f} (${(srcStat.size / 1024).toFixed(0)}KB) → packing-${base}.webp (${(dstStat.size / 1024).toFixed(0)}KB, -${ratio}%)`,
  );
  results.push(`packing-${base}.webp`);
}

console.log(`\nOptimized ${results.length} images → ${DST}`);
