import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';
import CarModel from '../models/Car';
import CarService from '../services/Car';

export default class CarController {
  constructor(
    protected _service: IService<ICar>,
  ) {}

  public async create(req: Request, res: Response) {
    const result = await this._service.create(req.body);
    return res.status(201).json(result);
  }

  public async getAll(_req: Request, res: Response) {
    const cars = await this._service.getAll();
    return res.status(200).json(cars);
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const car = await this._service.getById(id);
    return res.status(200).json(car);
  }

  public async updateById(req: Request, res: Response) {
    const { id } = req.params;
    const car = await this._service.updateById(id, req.body);
    return res.status(200).json(car);
  }
}

export const startNewCarController = () => {
  const model = new CarModel();
  const service = new CarService(model);
  return new CarController(service);
};