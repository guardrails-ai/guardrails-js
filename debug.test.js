import assert from 'node:assert';
import process from 'node:process';
import { Guard, Validators, exit } from './dist/index.js';

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
  exit();
});

async function main() {
  try {
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
              <string name="user_middle_name" description="The users middle name." format="length: 1" on-fail-length="filter" />
              <string name="account_is_private" description="The users middle name." format="valid-choices: {['false']}" on-fail-valid-choices="refrain" />
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

    const invalid = {
      "user_orders": [
        {
          "user_id": "Mock_User_Id",
          "user_name": "Mock User Name",
          "num_orders": 51,
          "last_order_date": "2023-06-28",
          "portal_url": "not a url",
          // "portal_url": "http://mock-portal.com",
          "user_middle_name": "Mockerson",
          "account_is_private": "true"
        }
      ]
    };

    const response = await objRailStrGuard.parse(
      JSON.stringify(invalid)
    );

    console.log('response: ', JSON.stringify(response, null, 2));
    console.log('Call.validationOutput', JSON.stringify(objRailStrGuard.history.first.validationOutput, null, 2));
    console.log('Call.fixedOutput', JSON.stringify(objRailStrGuard.history.first.fixedOutput, null, 2));

    assert.equal(response?.validationPassed, false);

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
await main();