import { Request, Response, NextFunction } from 'express';
import fileExists from 'file-exists';
import path from 'path';

async function verifyRequest(req: Request, res: Response, next: NextFunction): Promise<void> {
  if (typeof req.query.name == 'undefined') {
    res.status(400).send('Bad Request: You must provide a file name');
  } else if (
    typeof req.query.width == 'undefined' ||
    isNaN(parseInt(req.query.width as string)) ||
    parseInt(req.query.width as string) < 1
  ) {
    res.status(400).send("Bad Request: You must provide a positive numeric 'width' value");
  } else if (
    typeof req.query.height == 'undefined' ||
    isNaN(parseInt(req.query.height as string)) ||
    parseInt(req.query.height as string) < 1
  ) {
    res.status(400).send("Bad Request: You must provide a positive numeric 'height' value");
  } else {
    const ogFileName = (req.query.name as string) + '.jpg';
    const filePath = path.join(__dirname, 'imagesFolder', 'original', ogFileName);
    if (!(await fileExists(filePath))) {
      res.status(400)
        .send(`Bad Request: File name doesn't match any of the files existing on the server.
            Please enter one of the names provided in the project REAMDE instructions`);
    } else {
      next();
    }
  }
}
export default verifyRequest;
