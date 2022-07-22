import sharp from 'sharp';
import path from 'path';

async function resize(
  ogFileName: string,
  width: number,
  height: number,
  newFilePath: string
): Promise<void> {
  await sharp(path.join(__dirname, 'imagesFolder', 'original', ogFileName))
    .resize({
      width: width,
      height: height
    })
    .toFile(newFilePath);
}
export default resize;
