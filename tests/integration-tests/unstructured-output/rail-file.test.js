import { describe, expect, it } from '@jest/globals';
import { Guard, exit } from '../../../dist/index.js';

describe('Guard.fromRail', () => {
  afterAll(() => {
    exit();
  });
  describe('parse', () => {
    it('Fails when validation fails even if there are no reasks', async () => {
      const railspec = './test.rail';
    
      const guard = await Guard.fromRail(railspec);
      
      const messages = ['Hello World!', 'Goodbye World!'];
      
      const response = await guard.parse(
        'Hello World!',
        {
          promptParams: { 'messages': messages }
        }
        );
        
        expect(response.validationPassed).toEqual(false);
        expect(response.validatedOutput).toBeUndefined();
    });
  });
});