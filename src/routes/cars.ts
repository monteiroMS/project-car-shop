import * as express from 'express';
import { startNewCarController } from '../controllers/Car';
import validateCreateCar from '../middlewares/validateCreateCar';
import validateGetCarById from '../middlewares/validateGetCarById';

const router = express.Router();

const controller = startNewCarController();

const BASE_URL = '/cars';

router
  .post(BASE_URL, validateCreateCar, (req, res) => controller.create(req, res))
  .get(BASE_URL, (req, res) => controller.getAll(req, res))
  .get(`${BASE_URL}/:id`, validateGetCarById, (req, res) => controller.getById(req, res));

export default router;
