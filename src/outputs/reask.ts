import { map } from '../utils/map.js';
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
      const incorrectValueRef = await pyReAsk?.incorrect_value$;
      incorrectValue = await incorrectValueRef?.valueOf();
      const pyFailResults = await pyReAsk?.fail_results$;
      failResults = await map(pyFailResults, FailResult.fromPyFailResult);

    } catch (error) {
      console.error('An error occurred while parsing a ReAsk from python to javascript.', error);
    }

    return new ReAsk(
      incorrectValue,
      failResults || []
    );
  }
}