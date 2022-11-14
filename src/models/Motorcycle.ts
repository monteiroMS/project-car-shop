import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

export const motorcycleSchema = new Schema<IMotorcycle>({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  buyValue: {
    type: Number,
    required: true,
  }, 
  category: {
    type: String,
    required: true,
  },
  engineCapacity: {
    type: Number,
    required: true,
  },
}, { versionKey: false });

export default class MotorcycleModel extends MongoModel<IMotorcycle> {
  constructor(
    model = mongooseCreateModel<IMotorcycle>('Motorcycle', motorcycleSchema),
  ) { 
    super(model);
  }
}
