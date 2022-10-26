import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import { CAR_CREATE_MOCK, CAR_MODEL_RETURN } from '../mocks/carMock';
import { ICar } from '../../../interfaces/ICar';
const { expect } = chai;

describe('Testa "CarModel"', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon
      .stub(carModel, 'create')
      .resolves(CAR_MODEL_RETURN as any);
  });

  after(()=>{
    sinon.restore();
  })

  it('O Model possui a função "create" e aceita como parâmetro um objeto do tipo ICar', async () => {
    const result = await carModel.create(CAR_CREATE_MOCK as ICar);

    expect(result).to.be.deep.equal(CAR_MODEL_RETURN);
  });
});