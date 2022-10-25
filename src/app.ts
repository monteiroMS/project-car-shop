import express from 'express';
import errorHandler from './middlewares/error';
import carsRouter from './routes/cars';
import 'express-async-errors';

const app = express();

app
  .use(express.json())
  .use(carsRouter)
  .use(errorHandler);

export default app;
