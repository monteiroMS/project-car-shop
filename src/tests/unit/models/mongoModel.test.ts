import chai from 'chai';
import { Model, model as mongooseCreateModel, Schema } from 'mongoose';
import Sinon, * as sinon from 'sinon';
import { ICar } from '../../../interfaces/ICar';
import { carSchema } from '../../../models/Car';
import MongoModel from '../../../models/MongoModel';
import { CARS_MODEL_RETURN, CAR_CREATE_MOCK, CAR_MODEL_RETURN } from '../mocks/carMock';
const { expect } = chai;

describe('Testa "MongoModel"', () => {
  const model = mongooseCreateModel<ICar>('Car', carSchema);
  const carModel = new MongoModel(model);
  
  interface ICarWithSelect<T> extends ICar { 
    select: () => T;
  }

  before(async () => {
    sinon
      .stub(model, 'create')
      .resolves(CAR_MODEL_RETURN as any);

    sinon
      .stub(model, 'find')
      .resolves(CARS_MODEL_RETURN as any);

    sinon
      .stub(model, 'findOne')
      .resolves(CAR_MODEL_RETURN as any);
  });

  after(()=>{
    sinon.restore();
  });

  it('A classe possui o método "create" e retorna um objeto com as chaves esperadas', async () => {
    const result = await carModel.create(CAR_CREATE_MOCK);
    expect(result).to.be.deep.equal(CAR_MODEL_RETURN);
    expect((model.create as sinon.SinonStub).calledWith(CAR_CREATE_MOCK)).to.be.true;
  });

  it('A classe possui o método "read" e retorna todos os dados esperados', async () => {
    const result = await carModel.read();
    expect(result).to.be.deep.equal(CARS_MODEL_RETURN);
    expect((model.find as sinon.SinonStub).calledWith({})).to.be.true;
  });

  it('A classe possui o método "readOne" e retorna o dado especificado pelo "id"', async () => {
    const { _id: { $oid: id } } = CAR_MODEL_RETURN;
    const result = await carModel.readOne(id);
    expect(result).to.be.deep.equal(CAR_MODEL_RETURN);
  });

  it('A classe possui o método "update" e retorna o objeto esperado', async () => {
    // const { _id: { $oid: id } } = CAR_MODEL_RETURN;
    // const result = await carModel.readOne(id);
    // expect(result).to.be.deep.equal(CAR_MODEL_RETURN);
  });
});