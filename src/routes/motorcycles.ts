import * as express from 'express';
import { startNewMotorcycleController } from '../controllers/Motorcycle';
import validateMotorcycle from '../middlewares/validateCreateMotorcycle';
import validateGetMotorcycleById from '../middlewares/validateGetMotorcycleById';

const router = express.Router();

const controller = startNewMotorcycleController();

const BASE_URL = '/motorcycles';

router
  .post(
    BASE_URL,
    validateMotorcycle,
    (req, res) => controller.create(req, res),
  )
  .get(
    BASE_URL,
    (req, res) => controller.getAll(req, res),
  )
  .get(
    `${BASE_URL}/:id`,
    validateGetMotorcycleById,
    (req, res) => controller.getById(req, res),
  )
  .put(
    `${BASE_URL}/:id`,
    validateGetMotorcycleById,
    validateMotorcycle,
    (req, res) => controller.updateById(req, res),
  );

export default router;
