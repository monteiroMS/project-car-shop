import { z } from 'zod';
import { IVehicle, vehicleZodSchema } from './IVehicle';

export const motorcycleZodSchema = vehicleZodSchema.extend({
  category: z.string().regex(/Street|Custom|Trail/),
  engineCapacity: z.number().max(2500),
});

export interface IMotorcycle extends IVehicle {
  category: 'Street' | 'Custom' | 'Trail';
  engineCapacity: number,
}