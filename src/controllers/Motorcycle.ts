import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';
import MotorcycleModel from '../models/Motorcycle';
import MotorcycleService from '../services/Motorcycle';

interface IMotorcycleWithId extends IMotorcycle {
  _id: string,
}

export default class MotorcycleController {
  constructor(
    protected _service: IService<IMotorcycle>,
  ) {}

  public async create(req: Request, res: Response) {
    const result = await this._service.create(req.body);
    if (result) {
      const { _id: id } = result as IMotorcycleWithId;
      const motorcycle = await this._service.getById(id);
      return res.status(201).json(motorcycle);
    }
  }

  public async getAll(_req: Request, res: Response) {
    const motorcycles = await this._service.getAll();
    return res.status(200).json(motorcycles);
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const motorcycle = await this._service.getById(id);
    return res.status(200).json(motorcycle);
  }

  public async updateById(req: Request, res: Response) {
    const { id } = req.params;
    const motorcycle = await this._service.updateById(id, req.body);
    return res.status(200).json(motorcycle);
  }

  public async deleteById(req: Request, res: Response) {
    const { id } = req.params;
    await this._service.deleteById(id);
    return res.status(204).end();
  }
}

export const startNewMotorcycleController = () => {
  const model = new MotorcycleModel();
  const service = new MotorcycleService(model);
  return new MotorcycleController(service);
};