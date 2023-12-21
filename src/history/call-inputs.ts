import { Dictionary } from '../types.js';
import { determine } from '../utils/determine.js';
import { Inputs } from './inputs.js';

export class CallInputs extends Inputs {
  /**
     * Additional arguments for the LLM as provided by the user.",
     */
  private _args?: any[];
  /**
     * Additional keyword-arguments for the LLM as provided by the user.
     */
  private _kwargs?: Dictionary;

  constructor (
    llmOutput?: string,
    instructions?: string,
    prompt?: string,
    msgHistory?: Dictionary[],
    promptParams?: Dictionary,
    numReasks?: number,
    metadata?: Dictionary,
    fullSchemaReask?: boolean,
    args?: any[],
    kwargs?: Dictionary
  ) {
    super(
      llmOutput,
      instructions,
      prompt,
      msgHistory,
      promptParams,
      numReasks,
      metadata,
      fullSchemaReask
    );
    this._args = args;
    this._kwargs = kwargs;
  }

  static async fromPyCallInputs (pyCallInputs: any): Promise<CallInputs> {
    let llmOutput,
      instructions,
      prompt,
      msgHistory,
      promptParams,
      numReasks,
      metadata,
      fullSchemaReask,
      args,
      kwargs;
    try {
      llmOutput = await determine<string>(pyCallInputs?.llm_output);
      instructions = await determine<string>(pyCallInputs?.instructions);
      prompt = await determine<string>(pyCallInputs?.prompt);
      msgHistory = await determine<Dictionary[]>(pyCallInputs?.msg_history);
      promptParams = await determine<Dictionary>(pyCallInputs?.prompt_params);
      numReasks = await pyCallInputs?.num_reasks;
      metadata = await determine<Dictionary>(pyCallInputs?.metadata);
      fullSchemaReask = await determine<boolean>(pyCallInputs?.full_schema_reask);
      args = await determine<any[]>(pyCallInputs?.args);
      kwargs = await determine<Dictionary>(pyCallInputs?.kwargs);
    } catch (error) {
      console.error('An error occurred while parsing CallInputs from python to javascript.', error);
    }

    return new CallInputs(
      llmOutput,
      instructions,
      prompt,
      msgHistory,
      promptParams,
      numReasks,
      metadata,
      fullSchemaReask,
      args,
      kwargs
    );
  }

  /**
     * The prompt string as provided by the user.
     */
  public get prompt (): string | undefined {
    return this._prompt;
  }
  /**
     * The instructions string as provided by the user.
     */
  public get instructions (): string | undefined {
    return this._instructions;
  }
  public get args (): any[] | undefined {
    return this._args;
  }
  public get kwargs (): Dictionary | undefined {
    return this._kwargs;
  }
}