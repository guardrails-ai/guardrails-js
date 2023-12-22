import { ReAsk } from '../outputs/reask.js';

export async function determine<T> (pyObject?: any): Promise<T | undefined> {
  try {
    const ref = await pyObject;
    if (ref) {
      const reask = await ReAsk.fromPyReAsk(ref);
      const refIsReask = reask?.incorrectValue && reask?.failResults?.length > 0;
      return refIsReask ? reask : await ref.valueOf();
    }
  } catch (error) {
    console.error('Failed to determine value for ', await pyObject);
    console.error(error);
  }
}