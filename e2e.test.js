import { Guard, Validators } from './dist/index.js';

try {

  // String Railspec
  const string_rail = './e2e.rail';

  const string_railspec_guard = await Guard.fromRail(string_rail);
  // console.log("string_railspec_guard.prompt.source: ", string_railspec_guard.prompt.source)

  const messages = ['Hello World!', 'Goodbye World!'];

  const string_railspec_guard_response = await string_railspec_guard.parse(
    'Hello World!',
    {
      promptParams: { 'messages': messages }
    }
  );
  console.log('string_railspec_guard response:', string_railspec_guard_response);

  // String Guard
  const string_guard = await Guard.fromString(
    [await Validators.ValidLength(1, 10, 'fix')],
    'A word.',
    'Generate a single word with a length betwen 1 and 10.'
  );

  const response = await string_guard.parse('Hello World!');
  console.log('string_guard response:', response);

  // Dictionary Railspec
  const obj_rail_str = `
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

  const obj_rail_str_guard = await Guard.fromRailString(obj_rail_str);

  const obj_rail_str_guard_response = await obj_rail_str_guard.parse(
    '{"user_orders":[{"user_id":"Mock_User_Id","user_name":"Mock User Name","num_orders":72,"city":"Mock City","last_order_date":"2023-06-28"}]}',
    {
      numReasks: 1
    }
  );

  console.log('obj_rail_str_guard response:', JSON.stringify(obj_rail_str_guard_response));

  console.log('Calling exit 0');
  process.exit(0);
} catch (error) {
  console.error(error);
  console.log('Calling exit 1');
  process.exit(1);
}