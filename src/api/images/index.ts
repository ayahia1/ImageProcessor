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
  const ogFileName = req.query.name as unknown as string;
  const width = parseInt(req.query.width as unknown as string);
  const height = parseInt(req.query.height as unknown as string);
  const newFileName = ogFileName + 'x' + width + 'x' + height + '.jpg';
  const filePath = __dirname + '/imagesFolder/' + newFileName;

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    try {
      await resize(ogFileName, width, height, filePath);
      res.sendFile(filePath);
    } catch (_err) {
      res.status(500).send({ messsage: ERR });
    }
  }
});

export default imagesRouter;
