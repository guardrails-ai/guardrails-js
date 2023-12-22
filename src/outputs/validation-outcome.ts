import { determine } from '../utils/determine.js';
import { ReAsk } from './reask.js';

export class ValidationOutcome<T> {
  rawLlmOutput?: string;
  validatedOutput?: T;
  reask?: ReAsk;
  validationPassed: boolean;
  error?: string;

  constructor (
    validationPassed: boolean,
    rawLlmOutput?: string,
    validatedOutput?: T,
    reask?: ReAsk,
    error?: string
  ) {
    this.rawLlmOutput = rawLlmOutput;
    this.validatedOutput = validatedOutput;
    this.reask = reask;
    this.validationPassed = validationPassed;
    this.error = error;
  }

  static async fromPyValidationOutcome<OT> (pyValidationOutcome: any) {
    let rawLlmOutput, validatedOutput, reask, validationPassed, error;
    try {
      rawLlmOutput = await pyValidationOutcome.raw_llm_output;
      validatedOutput = await determine<OT>(pyValidationOutcome.validated_output);
      reask = await determine<ReAsk>(pyValidationOutcome.reask);
      validationPassed = await pyValidationOutcome.validation_passed;
      error = await pyValidationOutcome.error;
    } catch (err) {
      console.error('An error occurred while parsing a ValidationOutcome from python to javascript.', err);
    }

    return new ValidationOutcome<OT>(
      validationPassed,
      rawLlmOutput,
      validatedOutput,
      reask,
      error
    );
  }
}