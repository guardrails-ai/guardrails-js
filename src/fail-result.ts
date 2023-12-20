export class FailResult {
  outcome: string = 'fail';
  errorMessage: string;
  fixValue: any;

  constructor (
    errorMessage: string,
    fixValue: any
  ) {
    this.outcome = 'fail';
    this.errorMessage = errorMessage;
    this.fixValue = fixValue;
  }

  static async fromPyFailResult (pyFailResult: any) {
    let errorMessage, fixValue;
    try {
      errorMessage = await pyFailResult?.error_message;
      fixValue = await pyFailResult?.fix_value;
    } catch (error) {
      console.error('An error occurred while parsing a FailResult from python to javascript.', error);
    }

    return new FailResult(
      errorMessage,
      fixValue
    );
  }
}