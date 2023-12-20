import { python } from 'pythonia';
import { Validator } from './validators.js';
import { Dictionary, FromRailOptions, FromStringOptions, ParseOptions } from './types.js';
import { ValidationOutcome } from './validation-outcome.js';

const { Guard: PyGuard } = await python('guardrails');

export class Guard {
  private pyGuard: any;
  private outputType: string;

  constructor (pyGuard: any, outputType: string) {
    this.pyGuard = pyGuard;
    this.outputType = outputType;
  }

  static async fromRail (railFile: string, opts: FromRailOptions = {}): Promise<Guard> {
    // Using the $ postfixed methods lets you pass kwargs as an object
    const pyGuard = await PyGuard.from_rail$(railFile, opts);
    const outputType = await pyGuard.rail.output_type;

    const guard = new Guard(pyGuard, outputType);

    return guard;
  }

  static async fromRailString (railString: string, opts: FromRailOptions = {}): Promise<Guard> {
    const kwargs = {
      num_reasks: opts.numReasks
    };
    const pyGuard = await PyGuard.from_rail_string$(railString, kwargs);
    const outputType = await pyGuard.rail.output_type;

    const guard = new Guard(pyGuard, outputType);

    return guard;
  }

  static async fromString (validators: Validator[], opts: FromStringOptions = {}): Promise<Guard> {
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
    const outputType = await pyGuard.rail.output_type;

    const guard = new Guard(pyGuard, outputType);

    return guard;
  }

  async parse (
    llmOutput: string,
    opts: ParseOptions = {}
  ) {
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

    if (this.outputType === 'str') {
      return ValidationOutcome.fromPyValidationOutcome<string>(response);
    }
    return ValidationOutcome.fromPyValidationOutcome<Dictionary>(response);
  }
}