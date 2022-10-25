import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import CarController from '../../../controllers/Car';
import { Request, Response } from 'express';
import { CAR_MODEL_RETURN } from '../mocks/carMock';
const { expect } = chai;

describe('Testa "CarController"', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon
      .stub(carService, 'create')
      .resolves(CAR_MODEL_RETURN);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  it('Recebendo todos os itens necessários na requisição, deve retornar o carro criado com um status 201', async () => {
    req.body = CAR_MODEL_RETURN;
    await carController.create(req, res);

    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(CAR_MODEL_RETURN)).to.be.true;
  });
});