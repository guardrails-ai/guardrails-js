import { ReAsk } from '../outputs/reask.js';
import { py } from '../python.js';
import { map } from './map.js';

function isArray (ref: any) {
  const refString = ref.toString();
  return refString.startsWith('[') && refString.endsWith(']');
}

function isObject (ref: any) {
  const refString = ref.toString();
  return refString.startsWith('{') && refString.endsWith('}');
}

function isRefrain (ref: any) {
  const refString = ref.toString();
  return refString.startsWith('<guardrails.validator_base.Refrain');
}

function isFilter (ref: any) {
  const refString = ref.toString();
  return refString.startsWith('<guardrails.validator_base.Filter');
}

export async function determine<T> (pyObject?: any, name?: string): Promise<T | undefined> {
  try {
    const ref = await pyObject;
    if (ref) {
      if (isRefrain(ref) || isFilter(ref)) {
        return;
      }

      const reask = await ReAsk.fromPyReAsk(ref);
      const refIsReask = reask?.incorrectValue && reask?.failResults?.length > 0;

      if (refIsReask) {
        // @ts-ignore
        return reask;
      } else {
        if (isArray(ref)) {
          // @ts-ignore
          return map(ref, async (r, i) => await determine(r, `${name}.${i}`));
        } else if (isObject(ref)) {
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