import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';
import resize from './resize';
import verifyRequest from './verifyRequest';

const imagesRouter = Router();
const ERR = `Internal Server Error! Please notify the api authors and check later`;

//Adding logging to keep a record for when the endpoint is trie
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a+' });
imagesRouter.use(
  morgan('combined', {
    stream: accessLogStream,
    skip(_req, res) {
      return res.statusCode != 200;
    }
  })
);

imagesRouter.get('/', verifyRequest, async (req: Request, res: Response) => {
  const width = parseInt(req.query.width as unknown as string);
  const height = parseInt(req.query.height as unknown as string);
  const ogFileName = (req.query.name as unknown as string) + '.jpg';
  const newFileName = ogFileName + 'x' + width + 'x' + height + '.jpg';
  const newFilePath = path.join(__dirname, 'imagesFolder', 'thumbnail', newFileName);

  if (fs.existsSync(newFilePath)) {
    res.sendFile(newFilePath);
  } else {
    try {
      await resize(ogFileName, width, height, newFilePath);
      res.sendFile(newFilePath);
    } catch (err) {
      console.log(err);
      res.status(500).send({ messsage: ERR });
    }
  }
});

export default imagesRouter;
