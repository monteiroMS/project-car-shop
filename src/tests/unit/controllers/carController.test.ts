import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import CarController from '../../../controllers/Car';
import { Request, Response } from 'express';
import { CARS_MODEL_RETURN, CAR_CREATE_MOCK, CAR_MODEL_RETURN } from '../mocks/carMock';
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
    
    sinon
      .stub(carService, 'getAll')
      .resolves(CARS_MODEL_RETURN);

    sinon
      .stub(carService, 'getById')
      .resolves(CAR_MODEL_RETURN);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  it('Recebendo todos os itens necessários na requisição, deve retornar o carro criado com um status 201', async () => {
    req.body = CAR_CREATE_MOCK;
    await carController.create(req, res);

    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(CAR_MODEL_RETURN)).to.be.true;
  });

  it('O método "getAll" retorna todos os carros no bando de dados, com um status 200', async () => {
    await carController.getAll(req, res);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(CARS_MODEL_RETURN)).to.be.true;
  });

  it('O método "getAll" retorna todos os carros no bando de dados, com um status 200', async () => {
    const { _id: { $oid: id } } = CAR_MODEL_RETURN;
    req.params = { id };
    await carController.getAll(req, res);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(CAR_MODEL_RETURN)).to.be.true;
  });
});