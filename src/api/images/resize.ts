import sharp from 'sharp';
async function resize(ogFileName: string, width: number, height: number, filePath: string) {
  await sharp(__dirname + '/imagesFolder/' + ogFileName + '.jpg')
    .resize({
      width: width,
      height: height
    })
    .toFile(filePath);
}
export default resize;
