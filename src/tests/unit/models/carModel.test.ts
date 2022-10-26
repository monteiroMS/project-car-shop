import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import { CARS_MODEL_RETURN, CAR_CREATE_MOCK, CAR_MODEL_RETURN } from '../mocks/carMock';
import { ICar } from '../../../interfaces/ICar';
const { expect } = chai;

describe('Testa "CarModel"', () => {
  const carModel = new CarModel();

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

  it('O Model possui a função "create" e aceita como parâmetro um objeto do tipo ICar', async () => {
    const result = await carModel.create(CAR_CREATE_MOCK as ICar);

    expect(result).to.be.deep.equal(CAR_MODEL_RETURN);
  });

  it('O Model possui a função "read" e não precisa de nenhum parâmetro', async () => {
    const result = await carModel.read();

    expect(result).to.be.deep.equal(CARS_MODEL_RETURN);
  });

  it('O Model possui a função "readOne" que recebe um id por parâmetro', async () => {
    const { _id: { $oid: id } } = CAR_MODEL_RETURN;
    const result = await carModel.readOne(id);

    expect(result).to.be.deep.equal(CAR_MODEL_RETURN);
  });
});