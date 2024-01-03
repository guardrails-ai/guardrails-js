import { afterAll, describe, expect, it } from '@jest/globals';
import { Guard, Validators, exit } from '../../../dist/index.js';
import { python } from '../../../dist/python.js';

describe('Guard.fromString', () => { 
  afterAll(() => {
    exit();
  });
  describe('parse', () => {
    it('validation passes when validators fail but can auto-fix', async () => {
      const guard = await Guard.fromString(
        [await Validators.ValidLength(1, 10, 'fix')],
        {
          description: 'A word.',
          prompt: 'Generate a single word with a length betwen 1 and 10.'
        }
      );
        
      const response = await guard.parse('Hello World!');

      expect(response.validationPassed).toBe(true);
      expect(response.validatedOutput).toEqual('Hello Worl');
    });
    it.failing('validation fails when validators fail and value is not auto-fixed', async () => {
      const guard = await Guard.fromString(
        [await Validators.ValidLength(1, 10, 'reask')],
        {
          description: 'A word.',
          prompt: 'Generate a single word with a length betwen 1 and 10.'
        }
      );
        
      const response = await guard.parse('Hello World!');

      console.log(JSON.stringify(response))

      expect(response.validationPassed).toBe(false);
      expect(response.validatedOutput).toBeUndefined();
    });
  });
 });