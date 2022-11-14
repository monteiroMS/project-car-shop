import { NextFunction, Request, Response } from 'express';
import { motorcycleZodSchema } from '../interfaces/IMotorcycle';

const validateMotorcycle = (req: Request, _res: Response, next: NextFunction) => {
  const newMotorcycle = { ...req.body };

  const parsed = motorcycleZodSchema.safeParse(newMotorcycle);

  if (!parsed.success) {
    throw parsed.error;
  }

  next();
};

export default validateMotorcycle;