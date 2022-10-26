import { NextFunction, Request, Response } from 'express';
import { ErrorTypes } from '../errors/catalog';
import CarModel from '../models/Car';

const carModel = new CarModel();

const validateGetCarById = async (req: Request, _res: Response, next: NextFunction) => {
  const { id } = req.params;

  const invalidId = id.length !== 24;

  if (invalidId) {
    return next(new Error(ErrorTypes.InvalidMongoId));
  }

  const car = await carModel.readOne(id);
  
  if (!car) {
    return next(new Error(ErrorTypes.EntityNotFound));
  }

  return next();
};

export default validateGetCarById;