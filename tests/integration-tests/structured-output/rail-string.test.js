import { describe, expect, it } from '@jest/globals';
import { Guard, exit } from '../../../dist/index.js';

describe('Guard.fromRailString', () => {
  afterAll(() => {
    exit();
  });
  describe('parse', () => {
    it('validation passes when all output is valid', async () => {
      const objRailStr = `
      <rail version="0.1">
  
      <output>
          <list name="user_orders" description="Generate a list of user, and how many orders they have placed in the past." format="length: 1 10" on-fail-length="fix">
              <object>
                  <string name="user_id" description="The user's id." />
                  <string name="user_name" description="The user's first name and last name" format="two-words" on-fail-two-words="fix" />
                  <integer name="num_orders" description="The number of orders the user has placed" format="valid-range: 0 50" on-fail-valid-range="fix" />
                  <date name="last_order_date" description="Date of last order" />
              </object>
          </list>
      </output>
  
  
      <prompt>
      Generate a dataset of fake user orders. Each row of the dataset should be valid.
  
      \${gr.complete_json_suffix}
      </prompt>
  
      </rail>
    `;
  
      const objRailStrGuard = await Guard.fromRailString(objRailStr);
  
      const valid = {
        "user_orders": [
          {
            "user_id": "Mock_User_Id",
            "user_name": "Mock User",
            "num_orders": 49,
            "last_order_date": "2023-06-28"
          }
        ]
      };
  
      const response = await objRailStrGuard.parse(
        JSON.stringify(valid),
        {
          numReasks: 1
        }
      );
    
      expect(response.validationPassed).toEqual(true);
    });
  });
});

/*
async function objectRailStringTest () {
  console.info(' ============ START Object Railstring E2E Test ============ ')
  try {
    // Dictionary Railspec
    

    const invalid = {
      "user_orders": [
        {
          "user_id": "Mock_User_Id",
          "user_name": "Mock User Name",
          "num_orders": 72,
          "last_order_date": "2023-06-28"
        }
      ]
    };
    
    const invalidResponse = await objRailStrGuard.parse(
      JSON.stringify(invalid),
      {
        numReasks: 1
      }
    ).catch(e => console.error('An error was thrown from parse: ', e));
    console.log('Invalid Response:', JSON.stringify(invalidResponse, null, 2), "\n");

    console.log('Invalid Call: ', JSON.stringify(objRailStrGuard.history.at(1), null, 2))
    // assert.equal(validResponse.validationPassed, false);

    } catch (error) {
      console.error(error);
    } finally {
      console.info(' ============ END Object Railstring E2E Test ============ ')
    }

}
*/