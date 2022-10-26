import * as express from 'express';
import CarController from '../controllers/Car';
import validateCreateCar from '../middlewares/validateCreateCar';
import validateGetCarById from '../middlewares/validateGetCarById';
import CarModel from '../models/Car';
import CarService from '../services/Car';

const router = express.Router();

const model = new CarModel();
const service = new CarService(model);
const controller = new CarController(service);

const BASE_URL = '/cars';

router
  .post(BASE_URL, validateCreateCar, (req, res) => controller.create(req, res))
  .get(BASE_URL, (req, res) => controller.getAll(req, res))
  .get(`${BASE_URL}/:id`, validateGetCarById, (req, res) => controller.getById(req, res));

export default router;
