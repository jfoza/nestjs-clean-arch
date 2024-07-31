import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields';
import { IsNotEmpty, IsNumber, IsString, Max } from 'class-validator';

class StubRules {
  @Max(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  constructor(data: any) {
    Object.assign(this, data);
  }
}

class StubClassValidatorFields extends ClassValidatorFields<StubRules> {
  validate(data: any) {
    return super.validate(new StubRules(data));
  }
}

describe('Class Validator Fields integration tests', (): void => {
  it('Should validate with errors', () => {
    const validator: StubClassValidatorFields = new StubClassValidatorFields();

    expect(validator.validate(null)).toBeFalsy();
  });
});
