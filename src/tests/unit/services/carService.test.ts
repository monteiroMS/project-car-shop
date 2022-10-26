import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { CARS_MODEL_RETURN, CAR_CREATE_MOCK, CAR_MODEL_RETURN } from '../mocks/carMock';
const { expect } = chai;

describe('Testa "CarService"', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon
      .stub(carModel, 'create')
      .resolves(CAR_MODEL_RETURN as any);

    sinon
      .stub(carModel, 'read')
      .resolves(CARS_MODEL_RETURN as any[]);

    sinon
      .stub(carModel, 'readOne')
      .resolves(CAR_MODEL_RETURN as any);
  });

  after(()=>{
    sinon.restore();
  })

  it('Método "create" recebendo um objeto com todos os dados, deve retornar o carro criado', async () => {
    const result = await carService.create(CAR_CREATE_MOCK);

    expect(result).to.be.deep.equal(CAR_MODEL_RETURN);
  });

  it('Método "getAll" retorna todos carros do banco', async () => {
    const result = await carService.getAll();

    expect(result).to.be.deep.equal(CARS_MODEL_RETURN);
  });

  it('Método "getById" retorna o carro com o id recebido por parâmetro', async () => {
    const { _id: { $oid: id } } = CAR_MODEL_RETURN;
    const result = await carService.getById(id);

    expect(result).to.be.deep.equal(CAR_MODEL_RETURN);
  });
});