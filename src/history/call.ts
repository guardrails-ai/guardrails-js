import { ReAsk } from '../outputs/reask.js';
import { ValidatorLogs } from '../outputs/validator-logs.js';
import { Stack } from '../structs/stack.js';
import { Dictionary } from '../types.js';
import { determine } from '../utils/determine.js';
import { map } from '../utils/map.js';
import { CallInputs } from './call-inputs.js';
import { Iteration } from './iteration.js';

interface ICall<T> {
  iterations?: Stack<Iteration<T>>;
  inputs?: CallInputs;
  prompt?: string;
  promptParams?: Dictionary;
  compiledPrompt?: string;
  reaskPrompts?: Stack<string>;
  instructions?: string;
  compiledInstructions?: string;
  reaskInstructions?: Stack<string>;
  logs?: Stack<string>;
  tokensConsumed?: number;
  promptTokensConsumed?: number;
  completionTokensConsumed?: number;
  rawOutputs?: Stack<string>;
  parsedOutputs?: Stack<T>;
  validationOutput?: T | ReAsk;
  fixedOutput?: T;
  validatedOutput?: T;
  reasks?: Stack<ReAsk>;
  validatorLogs?: Stack<ValidatorLogs>;
  error?: string;
  exception?: Error;
  failedValidations?: Stack<ValidatorLogs>;
  status?: string;
}

export class Call<T> implements ICall<T> {
  /**
   * A stack of iterations for each step/reask that occurred during this call.
   */
  private _iterations: Stack<Iteration<T>>;

  /**
   * The inputs as passed in to Guard.__call__ or Guard.parse
   */
  private _inputs: CallInputs;

  /**
   * The prompt as provided by the user when intializing or calling the Guard.
  */
  private _prompt?: string;

  /**
   * The prompt parameters as provided by the user when intializing or calling the Guard.
  */
  private _promptParams?: Dictionary;

  /**
   * The initial compiled prompt that was passed to the LLM on the first call.
  */
  private _compiledPrompt?: string;

  /**
   * The compiled prompts used during reasks.
   * Does not include the initial prompt.
  */
  private _reaskPrompts: Stack<string>;

  /**
   * The instructions as provided by the user when intializing or calling the Guard.
  */
  private _instructions?: string;

  /**
   * The initial compiled instructions that were passed to the LLM on the first call.
  */
  private _compiledInstructions?: string;

  /**
   * The compiled instructions used during reasks.
   * Does not include the initial instructions.
  */
  private _reaskInstructions: Stack<string>;


  /**
   * Returns all logs from all iterations as a stack.
  */
  private _logs: Stack<string>;

  /**
   * Returns the total number of tokens consumed during all iterations with this call.
  */
  private _tokensConsumed?: number;

  /**
   * Returns the total number of prompt tokens consumed during all iterations with this call.
  */
  private _promptTokensConsumed?: number;

  /**
   * Returns the total number of completion tokens consumed during all iterations with this call.
  */
  private _completionTokensConsumed?: number;

  /**
   * The exact outputs from all LLM calls.
  */
  private _rawOutputs: Stack<string>;

  /**
   * The outputs from the LLM after undergoing parsing but before validation.
  */
  private _parsedOutputs: Stack<T>;

  /**
   * The cumulative validation output across all current iterations.
   * Could contain ReAsks.
  */
  private _validationOutput?: T | ReAsk;

  /**
   * The cumulative validation output across all current iterations with any automatic fixes applied.
  */
  private _fixedOutput?: T;

  /**
   * The output from the LLM after undergoing validation.
   * This will only have a value if the Guard is in a passing state.
  */
  private _validatedOutput?: T;

  /**
   * Reasks generated during validation that could not be automatically fixed.
   * These would be incorporated into the prompt for the next LLM call if additional reasks were granted.
  */
  private _reasks: Stack<ReAsk>;

  /**
   * The results of each individual validation performed on the LLM responses during all iterations.
  */
  private _validatorLogs: Stack<ValidatorLogs>;

  /**
   * The error message from any exception that raised and interrupted the run.
  */
  private _error?: string;

  /**
   * The exception that interrupted the run.
  */
  private _exception?: Error;

  /**
   * The validator logs for any validations that failed during the entirety of the run.
  */
  private _failedValidations: Stack<ValidatorLogs>;

  /**
   * Returns the cumulative status of the run based on the validity of the final merged output.
   */
  private _status?: string;

  constructor (
    call: ICall<T>
  ) {
    const {
      iterations = new Stack(),
      inputs = new CallInputs(),
      prompt,
      promptParams,
      compiledPrompt,
      reaskPrompts = new Stack(),
      instructions,
      compiledInstructions,
      reaskInstructions = new Stack(),
      logs = new Stack(),
      tokensConsumed,
      promptTokensConsumed,
      completionTokensConsumed,
      rawOutputs = new Stack(),
      parsedOutputs = new Stack(),
      validationOutput,
      fixedOutput,
      validatedOutput,
      reasks = new Stack(),
      validatorLogs = new Stack(),
      error,
      exception,
      failedValidations = new Stack(),
      status
    } = call;

    this._iterations = iterations;
    this._inputs = inputs;
    this._prompt = prompt;
    this._promptParams = promptParams;
    this._compiledPrompt = compiledPrompt;
    this._reaskPrompts = reaskPrompts;
    this._instructions = instructions;
    this._compiledInstructions = compiledInstructions;
    this._reaskInstructions = reaskInstructions;
    this._logs = logs;
    this._tokensConsumed = tokensConsumed;
    this._promptTokensConsumed = promptTokensConsumed;
    this._completionTokensConsumed = completionTokensConsumed;
    this._rawOutputs = rawOutputs;
    this._parsedOutputs = parsedOutputs;
    this._validationOutput = validationOutput;
    this._fixedOutput = fixedOutput;
    this._validatedOutput = validatedOutput;
    this._reasks = reasks;
    this._validatorLogs = validatorLogs;
    this._error = error;
    this._exception = exception;
    this._failedValidations = failedValidations;
    this._status = status;
  }

  static async fromPyCall<U> (pyCall: any) {
    let iterations,
      inputs,
      prompt,
      promptParams,
      compiledPrompt,
      reaskPrompts,
      instructions,
      compiledInstructions,
      reaskInstructions,
      logs,
      tokensConsumed,
      promptTokensConsumed,
      completionTokensConsumed,
      rawOutputs,
      parsedOutputs,
      validationOutput,
      fixedOutput,
      validatedOutput,
      reasks,
      validatorLogs,
      error,
      exception,
      failedValidations,
      status;

    try {
      const pyIterations = await pyCall?.iterations;
      const iterationArray: Iteration<U>[] = await map(pyIterations, Iteration.fromPyIteration<U>);
      iterations = new Stack(...iterationArray);

      const pyInputs = await pyCall?.inputs;
      inputs = await CallInputs.fromPyCallInputs(pyInputs);

      prompt = await determine<string>(pyCall?.prompt);
      promptParams = await determine<Dictionary>(pyCall?.prompt_params);
      compiledPrompt = await determine<string>(pyCall?.compiled_prompt);

      const pyReaskPrompts = await pyCall?.reask_prompts;
      const reaskPromptsArray: string[] = await map(pyReaskPrompts, (v: any) => v.valueOf());
      reaskPrompts = new Stack<string>(...reaskPromptsArray);

      instructions = await determine<string>(pyCall?.instructions);
      compiledInstructions = await determine<string>(pyCall?.compiled_instructions);

      const pyReaskInstructions = await pyCall?.reask_instructions;
      const reaskInstructionsArray: string[] = await map(pyReaskInstructions, (v: any) => v.valueOf());
      reaskInstructions = new Stack(...reaskInstructionsArray);

      const pyLogs = await pyCall?.logs;
      const logsArray: string[] = await map(pyLogs, (v: any) => v.valueOf());
      logs = new Stack(...logsArray);

      tokensConsumed = await determine<number>(pyCall?.tokens_consumed);
      promptTokensConsumed = await determine<number>(pyCall?.prompt_tokens_consumed);
      completionTokensConsumed = await determine<number>(pyCall?.completion_tokens_consumed);

      const pyRawOutputs = await pyCall?.raw_outputs;
      const rawOutputsArray: string[] = await map(pyRawOutputs, (v: any) => v.valueOf());
      rawOutputs = new Stack(...rawOutputsArray);

      const pyParsedOutputs = await pyCall?.parsed_outputs;
      const parsedOutputsArray: U[] = await map(pyParsedOutputs, (v: any) => v.valueOf());
      parsedOutputs = new Stack(...parsedOutputsArray);

      validationOutput = await determine<U | ReAsk>(pyCall?.validation_output);

      fixedOutput = await determine<U>(pyCall?.fixed_output);
      validatedOutput = await determine<U>(pyCall?.validated_output);

      const pyReasks = await pyCall?.reasks;
      const reasksArray: ReAsk[] = await map(pyReasks, ReAsk.fromPyReAsk);
      reasks = new Stack(...reasksArray);

      const pyValidatorLogs = await pyCall?.validator_logs;
      const validatorLogsArray: ValidatorLogs[] = await map(pyValidatorLogs, ValidatorLogs.fromPyValidatorLogs);
      validatorLogs = new Stack(...validatorLogsArray);

      error = await determine<string>(pyCall?.error);
      exception = await determine<Error>(pyCall?.exception);

      const pyFailedValidations = await pyCall?.failed_validations;
      const failedValidationsArray: ValidatorLogs[] = await map(pyFailedValidations, ValidatorLogs.fromPyValidatorLogs);
      failedValidations = new Stack(...failedValidationsArray);

      status = await determine<string>(pyCall?.status);
    } catch (err) {
      console.error('An error occurred while parsing a Call from python to javascript.', err);
    }

    return new Call({
      iterations,
      inputs,
      prompt,
      promptParams,
      compiledPrompt,
      reaskPrompts,
      instructions,
      compiledInstructions,
      reaskInstructions,
      logs,
      tokensConsumed,
      promptTokensConsumed,
      completionTokensConsumed,
      rawOutputs,
      parsedOutputs,
      validationOutput,
      fixedOutput,
      validatedOutput,
      reasks,
      validatorLogs,
      error,
      exception,
      failedValidations,
      status
    });
  }

  public get iterations (): Stack<Iteration<T>> {
    return this._iterations;
  }
  public get inputs (): CallInputs {
    return this._inputs;
  }
  public get prompt (): string | undefined {
    return this._prompt;
  }
  public get prompt_params (): Dictionary | undefined {
    return this._promptParams;
  }
  public get compiled_prompt (): string | undefined {
    return this._compiledPrompt;
  }
  public get reask_prompts (): Stack<string> {
    return this._reaskPrompts;
  }
  public get instructions (): string | undefined {
    return this._instructions;
  }
  public get compiled_instructions (): string | undefined {
    return this._compiledInstructions;
  }
  public get reask_instructions (): Stack<string> {
    return this._reaskInstructions;
  }
  public get logs (): Stack<string> {
    return this._logs;
  }
  public get tokens_consumed (): number | undefined {
    return this._tokensConsumed;
  }
  public get prompt_tokens_consumed (): number | undefined {
    return this._promptTokensConsumed;
  }
  public get completion_tokens_consumed (): number | undefined {
    return this._completionTokensConsumed;
  }
  public get raw_outputs (): Stack<string> {
    return this._rawOutputs;
  }
  public get parsed_outputs (): Stack<T> {
    return this._parsedOutputs;
  }
  public get validation_output (): T | ReAsk | undefined {
    return this._validationOutput;
  }
  public get fixed_output (): T | undefined {
    return this._fixedOutput;
  }
  public get validated_output (): T | undefined {
    return this._validatedOutput;
  }
  public get reasks (): Stack<ReAsk> {
    return this._reasks;
  }
  public get validator_logs (): Stack<ValidatorLogs> {
    return this._validatorLogs;
  }
  public get error (): string | undefined {
    return this._error;
  }
  public get exception (): Error | undefined {
    return this._exception;
  }
  public get failed_validations (): Stack<ValidatorLogs> {
    return this._failedValidations;
  }
  public get status (): string | undefined {
    return this._status;
  }
}