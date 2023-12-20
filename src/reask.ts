import { FailResult } from './fail-result.js';

export class ReAsk {
  incorrectValue: any;
  failResults: FailResult[];

  constructor (
    incorrectValue: any,
    failResults: FailResult[]
  ) {
    this.incorrectValue = incorrectValue;
    this.failResults = failResults;
  }

  static async fromPyReAsk (pyReAsk: any) {
    let incorrectValue, failResults;
    try {
      incorrectValue = await pyReAsk?.incorrect_value?.valueOf();
      const pyFailResults = await pyReAsk?.failResults;

      if (pyFailResults) {
        failResults = await Promise.all(pyFailResults.map(FailResult.fromPyFailResult));
      }
    } catch (error) {
      console.error('An error occurred while parsing a ReAsk from python to javascript.', error);
    }

    return new ReAsk(
      incorrectValue,
      failResults || []
    );
  }
}