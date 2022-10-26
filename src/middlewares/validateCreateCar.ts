import { NextFunction, Request, Response } from 'express';
import { carZodSchema } from '../interfaces/ICar';

const validateCar = (req: Request, _res: Response, next: NextFunction) => {
  const newCar = { ...req.body };

  const parsed = carZodSchema.safeParse(newCar);

  if (!parsed.success) {
    throw parsed.error;
  }

  next();
};

export default validateCar;