import sharp from 'sharp';
import path from 'path';
async function resize(
  ogFileName: string,
  width: number,
  height: number,
  newFilePath: string
): Promise<void> {
  const ogFilePath = path.join(__dirname, 'imagesFolder', 'original', ogFileName + '.jpg');
  await sharp(ogFilePath)
    .resize({
      width: width,
      height: height
    })
    .toFile(newFilePath);
}
export default resize;
