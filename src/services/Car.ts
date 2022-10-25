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
}