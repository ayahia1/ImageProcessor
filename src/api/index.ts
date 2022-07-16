import { Router } from 'express';
import images from './images';

const apiRouter = Router();
apiRouter.use('/images', images);
export default apiRouter;
