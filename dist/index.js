"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var api_1 = __importDefault(require("./api"));
// Image Resizing API. A name, width, and height should be provided
//For names you should select one of the five names below
//Height and width should be positive numbers larger than or equal to 1
//for decimal heights and widths, the api will round them down to the nearest integer and perform the
//resizing
//Can non javascript files be compiled and moved to dest (image folder)
//How to test
//Don't forget to commit
var app = (0, express_1.default)();
var port = 3000;
app.use('/api', api_1.default);
app.listen(port, function () { return console.log('App is running'); });
exports.default = app;
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
