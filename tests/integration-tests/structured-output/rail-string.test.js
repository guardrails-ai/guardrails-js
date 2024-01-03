import { describe, expect, it } from '@jest/globals';
import { Guard, exit } from '../../../dist/index.js';

const objRailStr = `
  <rail version="0.1">

  <output>
      <list name="user_orders" description="Generate a list of user, and how many orders they have placed in the past." format="length: 1 10" on-fail-length="fix">
          <object>
              <string name="user_id" description="The user's id." />
              <string name="user_name" description="The user's first name and last name" format="two-words" on-fail-two-words="reask" />
              <integer name="num_orders" description="The number of orders the user has placed" format="valid-range: 0 50" on-fail-valid-range="fix" />
              <date name="last_order_date" description="Date of last order" />
              <string name="portal_url" description="The url for the portal where the user submitted their order." format="valid-url" on-fail-valid-url="reask" />
          </object>
      </list>
  </output>


  <prompt>
  Generate a dataset of fake user orders. Each row of the dataset should be valid.

  \${gr.complete_json_suffix}
  </prompt>

  </rail>
`;

describe('Guard.fromRailString', () => {
  afterAll(() => {
    exit();
  });
  describe('parse', () => {
    it('validation passes when all output is valid', async () => {
      
      const objRailStrGuard = await Guard.fromRailString(objRailStr);
  
      const valid = {
        "user_orders": [
          {
            "user_id": "Mock_User_Id",
            "user_name": "Mock User",
            "num_orders": 49,
            "last_order_date": "2023-06-28",
            "portal_url": "http://my-portal.orders.com"
          }
        ]
      };
  
      const response = await objRailStrGuard.parse(
        JSON.stringify(valid)
      );
    
      expect(response.validationPassed).toEqual(true);
      expect(response.validatedOutput).toEqual(valid);
    });
    it.only('validation fails when any output is invalid and not fixed', async () => {
      const objRailStrGuard = await Guard.fromRailString(objRailStr);
  
      const invalid = {
        "user_orders": [
          {
            "user_id": "Mock_User_Id",
            "user_name": "Mock User Name",
            "num_orders": 51,
            "last_order_date": "2023-06-28",
            "portal_url": "not a url"
          }
        ]
      };
  
      const response = await objRailStrGuard.parse(
        JSON.stringify(invalid)
      ).catch(console.error);
    
      expect(response?.validationPassed).toEqual(false);
    });
  });
});