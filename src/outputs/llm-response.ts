export class LLMResponse {
  private _promptTokenCount?: number;
  private _responseTokenCount?: number;
  private _output?: string;

  constructor (
    promptTokenCount?: number,
    responseTokenCount?: number,
    output?: string
  ) {
    this._promptTokenCount = promptTokenCount;
    this._responseTokenCount = responseTokenCount;
    this._output = output;
  }

  static async fromPyLLMResponse (pyLLMResponse: any): Promise<LLMResponse> {
    let promptTokenCount,
      responseTokenCount,
      output;
    try {
      promptTokenCount = await pyLLMResponse.prompt_token_count;
      responseTokenCount = await pyLLMResponse.response_token_count;
      output = await pyLLMResponse.output;
    } catch (error) {
      console.error('An error occurred while parsing Inputs from python to javascript.', error);
    }

    return new LLMResponse(
      promptTokenCount,
      responseTokenCount,
      output
    );
  }

  public get promptTokenCount (): number | undefined {
    return this._promptTokenCount;
  }
  public get responseTokenCount (): number | undefined {
    return this._responseTokenCount;
  }
  public get output (): string | undefined {
    return this._output;
  }
}