import * as express from 'express';
import { startNewMotorcycleController } from '../controllers/Motorcycle';
import validateMotorcycle from '../middlewares/validateCreateMotorcycle';

const router = express.Router();

const controller = startNewMotorcycleController();

const BASE_URL = '/motorcycles';

router
  .post(
    BASE_URL,
    validateMotorcycle,
    (req, res) => controller.create(req, res),
  );

export default router;
