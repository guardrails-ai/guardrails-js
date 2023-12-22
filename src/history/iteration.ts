import { ReAsk } from '../outputs/reask.js';
import { ValidatorLogs } from '../outputs/validator-logs.js';
import { Stack } from '../structs/stack.js';
import { determine } from '../utils/determine.js';
import { map } from '../utils/map.js';
import { Inputs } from './inputs.js';
import { Outputs } from './outputs.js';

export class Iteration<T> {
  /**
  * The inputs for the iteration/step.
  */
  private _inputs: Inputs;

  /**
  * The outputs from the iteration/step.
  */
  private _outputs: Outputs<T>;

  /**
  * Returns the logs from this iteration as a stack.
  */
  private _logs: Stack<string>;

  /**
  * Returns the total number of tokens consumed during this iteration.
  */
  private _tokensConsumed?: number;

  /**
  *  Returns the number of prompt/input tokens consumed during this iteration.
  */
  private _promptTokensConsumed?: number;

  /**
  * Returns the number of completion/output tokens consumed during this iteration.
  */
  private _completionTokensConsumed?: number;

  /**
  * The exact output from the LLM.
  */
  private _rawOutput?: string;

  /**
  * The output from the LLM after undergoing parsing but before validation.
  */
  private _parsedOutput?: T;

  /**
  * The output from the validation process.
  * Could be a combination of valid output and ReAsks
  */
  private _validationOutput?: T | ReAsk;


  /**
  * The valid output from the LLM after undergoing validation.
  * Could be only a partial structure if field level reasks occur.
  * Could contain fixed values.
  */
  private _validatedOutput?: T;

  /**
  * Reasks generated during validation.
  * These would be incorporated into the prompt or the next LLM call.
  */
  private _reasks?: ReAsk[];

  /**
  * The results of each individual validation performed on the LLM response during this iteration.
  */
  private _validatorLogs?: ValidatorLogs[];

  /**
  * The error message from any exception that raised and interrupted this iteration.
  */
  private _error?: string;


  /**
  * The exception that interrupted this iteration.
  */
  private _exception?: Error;


  /**
  * The validator logs for any validations that failed during this iteration.
  */
  private _failedValidations?: ValidatorLogs[];

  /**
  * Representation of the end state of this iteration.
  * OneOf: pass, fail, error, not run
  */
  private _status?: string;

  constructor (
    inputs?: Inputs,
    outputs?: Outputs<T>,
    logs?: Stack<string>,
    tokensConsumed?: number,
    promptTokensConsumed?: number,
    completionTokensConsumed?: number,
    rawOutput?: string,
    parsedOutput?: T,
    validationOutput?: T | ReAsk,
    validatedOutput?: T,
    reasks?: ReAsk[],
    validatorLogs?: ValidatorLogs[],
    error?: string,
    exception?: Error,
    failedValidations?: ValidatorLogs[],
    status?: string
  ) {
    this._inputs = inputs || new Inputs();
    this._outputs = outputs || new Outputs();
    this._logs = logs || new Stack();
    this._tokensConsumed = tokensConsumed;
    this._promptTokensConsumed = promptTokensConsumed;
    this._completionTokensConsumed = completionTokensConsumed;
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

  static async fromPyIteration<U> (pyIteration: any): Promise<Iteration<U>> {
    let inputs,
      outputs,
      logs,
      tokensConsumed,
      promptTokensConsumed,
      completionTokensConsumed,
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
      const pyInputs = await pyIteration?.inputs;
      inputs = await Inputs.fromPyInputs(pyInputs);

      const pyOutputs = await pyIteration?.outputs;
      outputs = await Outputs.fromPyOutputs<U>(pyOutputs);

      const pyLogs = await determine<string[]>(pyIteration?.logs) || [];
      logs = new Stack(...pyLogs);

      tokensConsumed = await determine<number>(pyIteration?.tokens_consumed);
      promptTokensConsumed = await determine<number>(pyIteration?.prompt_tokens_consumed);
      completionTokensConsumed = await determine<number>(pyIteration?.completion_tokens_consumed);
      rawOutput = await determine<string>(pyIteration?.raw_output);
      parsedOutput = await determine<U>(pyIteration?.parsed_output);

      validationOutput = await determine<U | ReAsk>(pyIteration?.validation_output);

      validatedOutput = await determine<U>(pyIteration?.validated_output);

      const pyReasks = await pyIteration?.reasks;
      reasks = await map(pyReasks, ReAsk.fromPyReAsk);

      const pyValidatorLogs = await pyIteration?.validator_logs;
      validatorLogs = await map(pyValidatorLogs, ValidatorLogs.fromPyValidatorLogs);

      error = await determine<string>(pyIteration?.error);
      exception = await determine<Error>(pyIteration?.exception);

      const pyFailedValidations = await pyIteration?.failed_validations;
      failedValidations = await map(pyFailedValidations, ValidatorLogs.fromPyValidatorLogs);

      status = await determine<string>(pyIteration?.status);
    } catch (err) {
      console.error('An error occurred while parsing an Iteration from python to javascript.', err);
    }
    return new Iteration<U>(
      inputs,
      outputs,
      logs,
      tokensConsumed,
      promptTokensConsumed,
      completionTokensConsumed,
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

  public get inputs (): Inputs | undefined {
    return this._inputs;
  }
  public get outputs (): Outputs<T> | undefined {
    return this._outputs;
  }
  public get logs (): Stack<string> | undefined {
    return this._logs;
  }
  public get tokensConsumed (): number | undefined {
    return this._tokensConsumed;
  }
  public get promptTokensConsumed (): number | undefined {
    return this._promptTokensConsumed;
  }
  public get completionTokensConsumed (): number | undefined {
    return this._completionTokensConsumed;
  }
  public get rawOutput (): string | undefined {
    return this._rawOutput;
  }
  public get parsedOutput (): T | undefined {
    return this._parsedOutput;
  }
  public get validationOutput (): T | ReAsk | undefined {
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