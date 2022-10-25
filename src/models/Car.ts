import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carSchema = new Schema<ICar>({
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
  seatsQty: {
    type: Number,
    required: true,
  },
  doorsQty: {
    type: Number,
    required: true,
  },
});

export default class CarModel extends MongoModel<ICar> {
  constructor(
    model = mongooseCreateModel<ICar>('Car', carSchema),
  ) { 
    super(model);
  }
}
