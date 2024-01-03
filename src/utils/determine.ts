import { ReAsk } from '../outputs/reask.js';
import { py } from '../python.js';
import { map } from './map.js';

export async function determine<T> (pyObject?: any, name?: string): Promise<T | undefined> {
  try {
    const ref = await pyObject;
    if (ref) {
      const reask = await ReAsk.fromPyReAsk(ref);
      const refIsReask = reask?.incorrectValue && reask?.failResults?.length > 0;

      if (refIsReask) {
        // @ts-ignore
        return reask;
      } else {
        const refString = ref.toString();
        const isArray = refString.startsWith('[') && refString.endsWith(']');
        const isObject = refString.startsWith('{') && refString.endsWith('}');
        if (isArray) {
          // @ts-ignore
          return map(ref, async (r, i) => await determine(r, `${name}.${i}`));
        } else if (isObject) {
          const entries = [];
          // @ts-ignore
          for await (const entry of await py.enumerate(ref)) {
            const k = await entry[1];
            const v = await ref[k];
            const determinedEntry = await determine(v, `${k}.${name}`);
            entries.push([k, determinedEntry]);
          }
          // @ts-ignore
          return Object.fromEntries(entries);
        } else {
          const value = await ref.valueOf();
          return value;
        }
      }
    }
  } catch (error) {
    console.error('Failed to determine value for ', await pyObject);
    console.error(error);
  }
}