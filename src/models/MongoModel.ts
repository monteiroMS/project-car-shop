import { Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';

class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T) {
    const result = await this._model.create({ ...obj });
    return result;
  }

  public async readOne(_id: string) {
    const result = await this._model.findOne({ _id });
    return result;
  }

  public async read() {
    const result = await this._model.find({});
    return result;
  }

  public async update(_id: string, obj: T) {
    const result = await this._model.findOneAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
    return result;
  }

  public async delete(_id: string) {
    await this._model.deleteOne({ _id });
    return null;
  }
}

export default MongoModel;