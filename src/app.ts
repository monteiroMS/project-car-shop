import express from 'express';
import errorHandler from './middlewares/error';
import carsRouter from './routes/cars';
import motorcyclesRouter from './routes/motorcycles';
import 'express-async-errors';

const app = express();

app
  .use(express.json())
  .use(carsRouter)
  .use(motorcyclesRouter)
  .use(errorHandler);

export default app;
