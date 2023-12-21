import { LLMResponse } from '../outputs/llm-response.js';
import { ReAsk } from '../outputs/reask.js';
import { ValidatorLogs } from '../outputs/validator-logs.js';
import { determine } from '../utils/determine.js';
import { map } from '../utils/map.js';

export class Outputs<T> {
  /**
    * Information from the LLM response.
    */
  private _llmResponseInfo?: LLMResponse;
  /**
    * The exact output from the LLM.
    */
  private _rawOutput?: string;
  /**
    * The output parsed from the LLM response as it was passed into validation.
    */
  private _parsedOutput?: T;
  /**
    * The output from the validation process.
    */
  private _validationOutput?: ReAsk | T;
  /**
    * The valid output after validation.
    * Could be only a partial structure if field level reasks occur.
    * Could contain fixed values.
    */
  private _validatedOutput?: T;
  /**
    * Information from the validation process used to construct a ReAsk to the LLM on validation failure.
    */
  private _reasks?: ReAsk[];
  /**
     * The results of each individual validation.
     */
  private _validatorLogs?: ValidatorLogs[];
  /**
     * The error message from any exception that raised and interrupted the process.
     */
  private _error?: string;
  /**
     * The exception that interrupted the process.
     */
  private _exception?: Error;
  /**
     * A subset of validatorLogs for any validations that did not pass.
     */
  private _failedValidations?: ValidatorLogs[];
  /**
     * Representation of the end state of the validation run
     * OneOf: pass, fail, error, not run
     */
  private _status?: string;

  constructor (
    llmResponseInfo?: LLMResponse,
    rawOutput?: string,
    parsedOutput?: T,
    validationOutput?: ReAsk | T,
    validatedOutput?: T,
    reasks?: ReAsk[],
    validatorLogs?: ValidatorLogs[],
    error?: string,
    exception?: Error,
    failedValidations?: ValidatorLogs[],
    status?: string
  ) {
    this._llmResponseInfo = llmResponseInfo;
    this._rawOutput = rawOutput;
    this._parsedOutput = parsedOutput;
    this._validationOutput = validationOutput;
    this._validatedOutput = validatedOutput;
    this._reasks = reasks;
    this._validatorLogs = validatorLogs;
    this._error = error;
    this._exception = exception;
    this._failedValidations = failedValidations;
    this._status = status;
  }

  static async fromPyOutputs<U> (pyOutputs: any) {
    let llmResponseInfo,
      rawOutput,
      parsedOutput,
      validationOutput,
      validatedOutput,
      reasks,
      validatorLogs,
      error,
      exception,
      failedValidations,
      status;
    try {
      const pyLlmResponseInfo = await pyOutputs?.llm_response_info;
      llmResponseInfo = pyLlmResponseInfo && await LLMResponse.fromPyLLMResponse(pyLlmResponseInfo);

      rawOutput = await determine<string>(pyOutputs?.raw_output);
      parsedOutput = await determine<U>(pyOutputs?.parsed_output);

      const pyValidationOutput = await pyOutputs?.validation_output;
      const reaskValidationOutput = await ReAsk.fromPyReAsk(pyValidationOutput);
      validationOutput = reaskValidationOutput.incorrectValue && reaskValidationOutput.failResults.length > 0 ?
        reaskValidationOutput :
        await determine<U>(pyValidationOutput);

      validatedOutput = await determine<U>(pyOutputs?.validated_output);

      const pyReasks = await pyOutputs?.reasks;
      reasks = await map(pyReasks, ReAsk.fromPyReAsk);

      const pyValidatorLogs = await pyOutputs?.validator_logs;
      validatorLogs = await map(pyValidatorLogs, ValidatorLogs.fromPyValidatorLogs);

      error = await determine<string>(pyOutputs?.error);
      exception = await determine<Error>(pyOutputs?.exception);

      const pyFailedValidations = await pyOutputs?.failed_validations;
      failedValidations = await map(pyFailedValidations, ValidatorLogs.fromPyValidatorLogs);

      status = await determine<string>(pyOutputs?.status);
    } catch (err) {
      console.error('An error occurred while parsing Outputs from python to javascript.', err);
    }

    return new Outputs(
      llmResponseInfo,
      rawOutput,
      parsedOutput,
      validationOutput,
      validatedOutput,
      reasks,
      validatorLogs,
      error,
      exception,
      failedValidations,
      status
    );
  }

  public get llmResponseInfo (): LLMResponse | undefined {
    return this._llmResponseInfo;
  }
  public get rawOutput (): string | undefined {
    return this._rawOutput;
  }
  public get parsedOutput (): T | undefined {
    return this._parsedOutput;
  }
  public get validationOutput (): ReAsk | T | undefined {
    return this._validationOutput;
  }
  public get validatedOutput (): T | undefined {
    return this._validatedOutput;
  }
  public get reasks (): ReAsk[] | undefined {
    return this._reasks;
  }
  public get validatorLogs (): ValidatorLogs[] | undefined {
    return this._validatorLogs;
  }
  public get error (): string | undefined {
    return this._error;
  }
  public get exception (): Error | undefined {
    return this._exception;
  }
  public get failedValidations (): ValidatorLogs[] | undefined {
    return this._failedValidations;
  }
  public get status (): string | undefined {
    return this._status;
  }
}