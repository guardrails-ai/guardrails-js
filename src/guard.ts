import { python } from './python.js';
import { Validator } from './validators.js';
import { Dictionary, FromRailOptions, FromStringOptions, ParseOptions } from './types.js';
import { ValidationOutcome } from './outputs/validation-outcome.js';
import { Call } from './history/call.js';
import { Stack } from './structs/stack.js';
import { map } from './utils/map.js';

const { Guard: PyGuard } = await python('guardrails');

export class Guard<T> {
  private pyGuard: any;
  private _history: Stack<Call<T>>;

  constructor (pyGuard: any) {
    this.pyGuard = pyGuard;
    this._history = new Stack();
  }

  static async fromRail (railFile: string, opts: FromRailOptions = {}): Promise<Guard<string | Dictionary>> {
    // Using the $ postfixed methods lets you pass kwargs as an object
    const pyGuard = await PyGuard.from_rail$(railFile, opts);
    const outputType = await pyGuard.rail.output_type;

    if (outputType === 'str') {
      return new Guard<string>(pyGuard);
    }

    return new Guard<Dictionary>(pyGuard);
  }

  static async fromRailString (railString: string, opts: FromRailOptions = {}): Promise<Guard<string | Dictionary>> {
    const kwargs = {
      num_reasks: opts.numReasks
    };
    const pyGuard = await PyGuard.from_rail_string$(railString, kwargs);
    const outputType = await pyGuard.rail.output_type;

    if (outputType === 'str') {
      return new Guard<string>(pyGuard);
    }

    return new Guard<Dictionary>(pyGuard);
  }

  static async fromString (validators: Validator[], opts: FromStringOptions = {}): Promise<Guard<string>> {
    const {
      description,
      instructions,
      numReasks,
      prompt,
      reaskPrompt,
      reaskInstructions
    } = opts;
    const kwargs = {
      description: description,
      instructions: instructions,
      num_reasks: numReasks,
      prompt: prompt,
      reask_prompt: reaskPrompt,
      reask_instructions: reaskInstructions
    };
    const pyGuard = await PyGuard.from_string$(validators, kwargs);

    return new Guard<string>(pyGuard);
  }

  async parse (
    llmOutput: string,
    opts: ParseOptions = {}
  ): Promise<ValidationOutcome<T>> {
    try {
      const {
        metadata,
        numReasks,
        promptParams,
        fullSchemaReask,
        kwargs
      } = opts;

      const response = await this.pyGuard.parse$(
        llmOutput,
        {
          metadata,
          num_reasks: numReasks,
          prompt_params: promptParams,
          full_schema_reask: fullSchemaReask,
          ...kwargs
        }
      );
      return ValidationOutcome.fromPyValidationOutcome<T>(response);
    } finally {
      await this.cloneProperties();
    }
  }

  private async cloneProperties () {
    // Leave room for other properties
    await this.cloneHistory();
  }

  private async cloneHistory () {
    const pyHistory = await this.pyGuard.history;
    const callArray: Call<T>[] = await map<Call<T>>(pyHistory, Call.fromPyCall<T>);
    const callStack = new Stack(...callArray);
    this._history = callStack;
  }

  public get history (): Stack<Call<T>> {
    return this._history;
  }
}