import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

export default class MotorcycleService implements IService<IMotorcycle> {
  constructor(
    protected _model: IModel<IMotorcycle>,
  ) {}

  public async create(obj: IMotorcycle) {
    const result = await this._model.create(obj);
    return result;
  }

  public async getAll() {
    const motorcycles = await this._model.read();
    return motorcycles;
  }

  public async getById(id: string) {
    const motorcycles = await this._model.readOne(id);
    return motorcycles;
  }

  public async updateById(id: string, obj: IMotorcycle) {
    const motorcycles = await this._model.update(id, obj);
    return motorcycles;
  }

  public async deleteById(id: string) {
    await this._model.delete(id);
  }
}