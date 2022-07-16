import express from 'express';
import api from './api';

// Image Resizing API. A name, width, and height should be provided
//For names you should select one of the five names below
//Height and width should be positive numbers larger than or equal to 1
//for decimal heights and widths, the api will round them down to the nearest integer and perform the
//resizing

//Can non javascript files be compiled and moved to dest (image folder)
//How to test
//Don't forget to commit

const app = express();
const port = 3000;

app.use('/api', api);

app.listen(port, () => console.log('App is running'));
export default app;

// //returns the directory where images reside
// export const getImagesDir = async (dir: string): Promise<string> => {
//     let imagesDir = '';
//     const dirContents: string[] = await fs.readdirSync(dir);
//     if (dirContents.includes('images')) {
//       imagesDir = path.join(dir, 'images');
//       return imagesDir;
//     } else {
//       imagesDir = await getImagesDir(path.join(dir, '..'));
//       return imagesDir;
//     }
//   };
