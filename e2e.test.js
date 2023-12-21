import process from 'node:process';
import console from 'node:console';
import { strict as assert } from 'node:assert';
import { Guard, Validators } from './dist/index.js';

// TODO: Test this in python; our results may be wrong
async function railSpecTest () {
  console.info(' ============ START String Railspec E2E Test ============ ')
  try {
    // String Railspec
    const stringRail = './e2e.rail';
    
    const stringRailspecGuard = await Guard.fromRail(stringRail);
    
    const messages = ['Hello World!', 'Goodbye World!'];
    
    const stringRailspecGuardResponse = await stringRailspecGuard.parse(
      'Hello World!',
      {
        promptParams: { 'messages': messages }
      }
      );
      console.log('stringRailspecGuard response:', stringRailspecGuardResponse);
      assert.equal(stringRailspecGuardResponse.validationPassed, true);
      assert.equal(stringRailspecGuardResponse.validatedOutput, 'Hello Worl');
    } catch (error) {
      console.error(error);
    } finally {
      console.info(' ============ END String Railspec E2E Test ============ ')
    }
}

async function stringGuardTest () {
  console.info(' ============ START String Guard E2E Test ============ ')
  try {
    // String Guard
    const stringGuard = await Guard.fromString(
      [await Validators.ValidLength(1, 10, 'fix')],
      'A word.',
      'Generate a single word with a length betwen 1 and 10.'
      );
      
      const response = await stringGuard.parse('Hello World!');
      console.log('stringGuard response:', response);
      assert.equal(response.validationPassed, true);
      assert.equal(response.validatedOutput, 'Hello Worl');
    } catch (error) {
      console.error(error);
    } finally {
      console.info(' ============ END String Guard E2E Test ============ ')
    }
}

async function objectRailStringTest () {
  console.info(' ============ START Object Railstring E2E Test ============ ')
  try {
    // Dictionary Railspec
    const objRailStr = `
    <rail version="0.1">

    <output>
        <list name="user_orders" description="Generate a list of user, and how many orders they have placed in the past." format="length: 1 10" on-fail-length="noop">
            <object>
                <string name="user_id" description="The user's id." format="1-indexed" />
                <string name="user_name" description="The user's first name and last name" format="two-words" />
                <integer name="num_orders" description="The number of orders the user has placed" format="valid-range: 0 50" />
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

    const objRailStrGuardResponse = await objRailStrGuard.parse(
      '{"user_orders":[{"user_id":"Mock_User_Id","user_name":"Mock User Name","num_orders":72,"city":"Mock City","last_order_date":"2023-06-28"}]}',
      {
        numReasks: 1
      }
    );

    console.log('objRailStrGuard response:', JSON.stringify(objRailStrGuardResponse));
    } catch (error) {
      console.error(error);
    } finally {
      console.info(' ============ END Object Railstring E2E Test ============ ')
    }
}

try {

  // await railSpecTest();
  // await stringGuardTest();
  await objectRailStringTest();
  
  console.log('Calling exit 0');
  process.exit(0);
} catch (error) {
  console.error(error);
  console.log('Calling exit 1');
  process.exit(1);
}