guardrails-ai / [Exports](modules.md)

# guardrails-js
A Javascript wrapper for guardrails-ai.

This library contains limited support for using [guardrails-ai](https://pypi.org/project/guardrails-ai/) in javascript.

The following methods and properties are supported:
* Guard.fromRail
* Guard.fromRailString
* Guard.fromString
* Guard.parse (without an `llm_api`)
* Guard.history

The key differences between this wrapper and the python library are as follows:
1. All methods and properties are in `camelCase` instead of `snake_case`
1. No support for custom validators
1. No support for re-asking (though you can perform reasks yourself outside of the library using `ValidationOutcome.reask` or `guard.history.at(#).reask_prompts` when defined)
1. LLM calls must be made by the user and the text response passed into parse

In addition to above, this library also supports the readonly properties on the [ValidationOutcome class](https://www.guardrailsai.com/docs/api_reference_markdown/validation_outcome) as well as readonly versions of the History & Logs related classes like [Call](https://www.guardrailsai.com/docs/api_reference_markdown/history_and_logs#call-objects), [Iteration](https://www.guardrailsai.com/docs/api_reference_markdown/history_and_logs#iteration-objects), etc..

See the JS docs [here]()

## Example
```js
import { Guard, Validators } from 'guardrails-ai';

const guard = await Guard.fromRail('./my-railspec.rail');
      
const messages = ['Hello World!', 'Goodbye World!'];

const response = await guard.parse(
    'Hello World!',
    {
        promptParams: { 'messages': messages }
    }
);

console.log(response);
```

## Caveats and Oddities
The current version of the library uses a IO bridge so both javascript and python3 must be available in the environment.

The bridge implementation we use doesn't always work well with multi-processing.  For this reason it is best to set the `GUARDRAILS_PROCESS_COUNT` environment variable to `1` when starting the node process:
```sh
GUARDRAILS_PROCESS_COUNT="1" node ./my-script-or-app.js
```

For the best experience, you may also need to explicitly call for the bridge to exit at the end of the node process.  We export an `exit` function to serve this purpose.

Below is a simple end-to-end test we use that demonstrates the concepts above:

```js
import assert from 'node:assert';
import process from 'node:process';
import { Guard, Validators, exit } from './dist/index.js';

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
  exit();
});

async function main () {
  try {
    const guard = await Guard.fromString(
      [await Validators.ValidLength(1, 10, 'fix')],
      {
        description: 'A word.',
        prompt: 'Generate a single word with a length betwen 1 and 10.'
      }
    );

    const firstResponse = await guard.parse('Hello World!');
    console.log("first response: ", JSON.stringify(firstResponse, null, 2));
    assert.equal(firstResponse.validationPassed, true);
    assert.equal(firstResponse.validatedOutput, 'Hello Worl');
    assert.equal(guard.history.at(0).status, 'pass');
    
    const secondResponse = await guard.parse('Hello World 2!');
    console.log("second response: ", JSON.stringify(secondResponse, null, 2));
    assert.equal(secondResponse.validationPassed, true);
    assert.equal(secondResponse.validatedOutput, 'Hello Worl');
    assert.equal(guard.history.at(1).status, 'pass');

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
await main();
```

We run this with the following command:
```sh
GUARDRAILS_PROCESS_COUNT="1" node e2e.test.js
```
