import { determine } from '../utils/determine.js';
import { ValidationResult } from './validation-result.js';

export class ValidatorLogs {
  private _validatorName?: string;
  private _valueBeforeValidation?: any;
  private _validationResult?: ValidationResult;
  private _valueAfterValidation?: any;

  constructor (
    validatorName?: string,
    valueBeforeValidation?: any,
    validationResult?: ValidationResult,
    valueAfterValidation?: any
  ) {
    this._validatorName = validatorName;
    this._valueBeforeValidation = valueBeforeValidation;
    this._validationResult = validationResult;
    this._valueAfterValidation = valueAfterValidation;
  }

  static async fromPyValidatorLogs (pyValidatorLogs: any): Promise<ValidatorLogs> {
    let validatorName,
      valueBeforeValidation,
      validationResult,
      valueAfterValidation;
    try {
      validatorName = await pyValidatorLogs?.validator_name;
      valueBeforeValidation = await determine<any>(pyValidatorLogs?.value_before_validation);
      const pyValidationResult = await pyValidatorLogs?.validation_result;
      validationResult = pyValidationResult && await ValidationResult.fromPyValidationResult(pyValidationResult);
      valueAfterValidation = await determine<any>(pyValidatorLogs?.value_after_validation);
    } catch (error) {
      console.error('An error occurred while parsing ValidatorLogs from python to javascript.', error);
    }

    return new ValidatorLogs(
      validatorName,
      valueBeforeValidation,
      validationResult,
      valueAfterValidation
    );
  }

  public get validatorName (): string | undefined {
    return this._validatorName;
  }
  public get valueBeforeValidation (): any | undefined {
    return this._valueBeforeValidation;
  }
  public get validationResult (): ValidationResult | undefined {
    return this._validationResult;
  }
  public get valueAfterValidation (): any | undefined {
    return this._valueAfterValidation;
  }
}