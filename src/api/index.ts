import { Router } from 'express';
import images from './images';

const apiRouter = Router();
apiRouter.use('/images', images);
apiRouter.get('/', (_req, res): void => {
  res.send('Welcome to our API');
});
export default apiRouter;
