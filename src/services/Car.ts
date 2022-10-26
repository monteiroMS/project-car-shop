import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

export default class CarService implements IService<ICar> {
  constructor(
    protected _model: IModel<ICar>,
  ) {}

  public async create(obj: ICar) {
    const result = await this._model.create(obj);
    return result;
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
}