import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

export interface ICarWithId extends ICar { _id: string }

export default class CarService implements IService<ICar> {
  constructor(
    protected _model: IModel<ICar>,
  ) {}

  public async create(obj: ICar) {
    const result = await this._model.create(obj);
    return result as ICarWithId;
  }

  public async getAll() {
    const cars = await this._model.read();
    return cars;
  }

  public async getById(id: string) {
    const car = await this._model.readOne(id);
    return car;
  }

  public async updateById(id: string, obj: ICar) {
    const car = await this._model.update(id, obj);
    return car;
  }

  public async deleteById(id: string) {
    await this._model.delete(id);
  }
}