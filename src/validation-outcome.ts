import { ReAsk } from './reask.js';

export class ValidationOutcome<OutputType> {
  rawLlmOutput?: string;
  validatedOutput?: OutputType;
  reask?: ReAsk;
  validationPassed: boolean;
  error?: string;

  constructor (
    validationPassed: boolean,
    rawLlmOutput?: string,
    validatedOutput?: OutputType,
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
      validatedOutput = await pyValidationOutcome.validated_output?.valueOf();
      const pyReask = await pyValidationOutcome.reask;
      validationPassed = await pyValidationOutcome.validation_passed;
      error = await pyValidationOutcome.error;

      if (pyReask) {
        reask = await ReAsk.fromPyReAsk(pyReask);
      }
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