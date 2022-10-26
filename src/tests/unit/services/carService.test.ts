import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { CAR_CREATE_MOCK, CAR_MODEL_RETURN } from '../mocks/carMock';
const { expect } = chai;

describe('Testa "CarService"', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon
      .stub(carModel, 'create')
      .resolves(CAR_MODEL_RETURN as any);
  });

  after(()=>{
    sinon.restore();
  })

  it('Recebendo um objeto com todos os dados, deve retornar o carro criado', async () => {
    const result = await carService.create(CAR_CREATE_MOCK);

    expect(result).to.be.deep.equal(CAR_MODEL_RETURN);
  });
});