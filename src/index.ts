import express from 'express';
import api from './api';

const app = express();
const port = 3000;

app.use('/api', api);

app.listen(port, (): void => console.log('App is running'));
export default app;
