import { Entity } from '@/shared/domain/entities/entity';
import { validate as uuidValidate } from 'uuid';

type typeStubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<typeStubProps> {}

describe('Entity unity tests', (): void => {
  it('Should set props and id', (): void => {
    const props: typeStubProps = { prop1: 'test1', prop2: 15 };

    const entity: StubEntity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  });

  it('Should accept a valid uuid', (): void => {
    const props: typeStubProps = { prop1: 'test1', prop2: 15 };
    const id: string = '128ee199-dd8b-4224-8f5e-bdf32bf0def9';
    const entity: StubEntity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });

  it('Should convert a entity to a Javascript object', (): void => {
    const props: typeStubProps = { prop1: 'test1', prop2: 15 };
    const id: string = '128ee199-dd8b-4224-8f5e-bdf32bf0def9';
    const entity: StubEntity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});
