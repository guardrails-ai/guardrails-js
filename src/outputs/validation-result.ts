import { Dictionary } from '../types.js';
import { determine } from '../utils/determine.js';

export class ValidationResult {
  private _outcome?: string;
  private _metadata?: Dictionary;

  constructor (
    outcome?: string,
    metadata?: Dictionary
  ) {
    this._outcome = outcome;
    this._metadata = metadata;
  }

  static async fromPyValidationResult (pyValidationResult: any): Promise<ValidationResult> {
    let outcome, metadata;
    try {
      outcome = await pyValidationResult?.outcome;
      metadata = await determine<Dictionary>(pyValidationResult?.metadata);
    } catch (error) {
      console.error('An error occurred while parsing a ValidationResult from python to javascript.', error);
    }

    return new ValidationResult(outcome, metadata);
  }

  public get outcome (): string | undefined {
    return this._outcome;
  }
  public get metadata (): Dictionary | undefined {
    return this._metadata;
  }
}