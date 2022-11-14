import { NextFunction, Request, Response } from 'express';
import { ErrorTypes } from '../errors/catalog';
import MotorcycleModel from '../models/Motorcycle';

const motorcycleModel = new MotorcycleModel();

const validateGetMotorcycleById = async (req: Request, _res: Response, next: NextFunction) => {
  const { id } = req.params;

  const invalidId = id.length !== 24;

  if (invalidId) {
    return next(new Error(ErrorTypes.InvalidMongoId));
  }

  try {
    const motorcycle = await motorcycleModel.readOne(id);
    if (!motorcycle) throw new Error();
  } catch (error) {
    return next(new Error(ErrorTypes.EntityNotFound));
  }

  return next();
};

export default validateGetMotorcycleById;