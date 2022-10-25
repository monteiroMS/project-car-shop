import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

export default class CarModel extends MongoModel<ICar> {
  constructor(
    model = mongooseCreateModel<ICar>('Car', new Schema<ICar>()),
  ) { 
    super(model);
  }
}
