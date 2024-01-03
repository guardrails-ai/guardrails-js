import { Dictionary } from '../types.js';
import { determine } from '../utils/determine.js';

export class Inputs {
  /**
   * The string output from an external LLM call provided by the user via Guard.parse.
   */
  protected _llmOutput?: string;
  /**
   * The instructions for chat model calls.
   */
  protected _instructions?: string;
  /**
   * The prompt.
   */
  protected _prompt?: string;
  /**
   * The message history provided by the user for chat model calls.
   */
  protected _msgHistory?: Dictionary[];
  /**
   * The parameters provided by the user that will be formatted into the final LLM prompt.
   */
  protected _promptParams?: Dictionary;
  /**
   * The total number of reasks allowed; user provided or defaulted.
   */
  protected _numReasks?: number;
  /**
   * The metadata provided by the user to be used during validation.
   */
  protected _metadata?: Dictionary;
  /**
   * Whether to perform reasks across the entire schema or at the field level.
   */
  protected _fullSchemaReask?: boolean;

  constructor (
    llmOutput?: string,
    instructions?: string,
    prompt?: string,
    msgHistory?: Dictionary[],
    promptParams?: Dictionary,
    numReasks?: number,
    metadata?: Dictionary,
    fullSchemaReask?: boolean
  ) {
    this._llmOutput = llmOutput;
    this._instructions = instructions;
    this._prompt = prompt;
    this._msgHistory = msgHistory;
    this._promptParams = promptParams;
    this._numReasks = numReasks;
    this._metadata = metadata;
    this._fullSchemaReask = fullSchemaReask;
  }

  static async fromPyInputs (pyInputs: any): Promise<Inputs> {
    let llmOutput,
      instructions,
      prompt,
      msgHistory,
      promptParams,
      numReasks,
      metadata,
      fullSchemaReask;
    try {
      llmOutput = await pyInputs?.llm_output;
      instructions = await pyInputs?.instructions;
      prompt = await pyInputs?.prompt;
      msgHistory = await determine<Dictionary[]>(pyInputs?.msg_history);
      promptParams = await determine<Dictionary>(pyInputs?.prompt_params);
      numReasks = await determine<number>(pyInputs?.num_reasks);
      metadata = await determine<Dictionary>(pyInputs?.metadata);
      fullSchemaReask = await determine<boolean>(pyInputs?.full_schema_reask);
    } catch (error) {
      console.error('An error occurred while parsing Inputs from python to javascript.', error);
    }

    return new Inputs(
      llmOutput,
      instructions,
      prompt,
      msgHistory,
      promptParams,
      numReasks,
      metadata,
      fullSchemaReask
    );
  }

  public get llmOutput (): string | undefined {
    return this._llmOutput;
  }
  public get instructions (): string | undefined {
    return this._instructions;
  }
  public get prompt (): string | undefined {
    return this._prompt;
  }
  public get msgHistory (): Dictionary[] | undefined {
    return this._msgHistory;
  }
  public get promptParams (): Dictionary | undefined {
    return this._promptParams;
  }
  public get numReasks (): number | undefined {
    return this._numReasks;
  }
  public get metadata (): Dictionary | undefined {
    return this._metadata;
  }
  public get fullSchemaReask (): boolean | undefined {
    return this._fullSchemaReask;
  }
}