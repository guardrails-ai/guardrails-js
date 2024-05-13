# Getting Started with Guardrails JS

## Installation

See the [installation](/docs/installation) page for instructions on downloading the latest and pre-release versions as well as any requirements. 

## Create A Simple Guard Without an LLM 

For your first Guardrails application, we'll create a simple guard that checks if a word is between 1 and 10 characters long. If it's longer than 10 characters, we'll ask Guardrails to "fix" the output by truncating it. 

The first pass of this code will test the guard against hard-coded values. In the next step, you'll connect the code to an LLM and test its output. 

1. Save the following code to a file named `test-gr.js`.

```javascript
import assert from 'node:assert';
import process from 'node:process';
import { Guard, Validators, exit } from '@guardrails-ai/core';

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
        prompt: 'Generate a single word with a length between 1 and 10.'
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

2. Run the code with the following command: 

```bash
node ./test-gr.js
```

3. Examine the result, which will resemble the output below. Notice that Guardrails “fixed” the output for us by truncating each phrase down to exactly 10 characters. 

```
first response:  {
  "rawLlmOutput": "Hello World!",
  "validatedOutput": "Hello Worl",
  "validationPassed": true,
  "error": null
}
second response:  {
  "rawLlmOutput": "Hello World 2!",
  "validatedOutput": "Hello Worl",
  "validationPassed": true,
  "error": null
}
```

### Explanation of the Guardrails JS Code 

The code above creates a Guard that you can use to wrap a call to an LLM. In this case, your  Guard will examine the callback from an LLM to ensure that it followed your instructions to generate a word of between one and 10 characters in length. 

```javascript
try {
    const guard = await Guard.fromString(
        [await Validators.ValidLength(1, 10, 'fix')],
        {
            description: 'A word.',
            prompt: 'Generate a single word with a length between 1 and 10.'
        }
    );
```

In this case, you specify validation by creating your validators using Javascript. You can also create a validation schema by creating and loading a RAIL (Reliable AI Markup Language) specification. 

When you specify our guard, you can also specify what happens if the LLM fails to adhere to it. This is called an `on_fail` policy. In the above, when you define your validator, you specify as the third argument that the `on_fail` policy should be `fix`.  In other words, if the output is longer than 10 characters, you want your guard to truncate it. 

```javascript
    const guard = await Guard.fromString(
      [await Validators.ValidLength(1, 10, 'fix')],
```

In the current code, instead of wrapping an LLM call directly, you act as if you’re parsing the result of an LLM response by calling the `parse()` method on your Guard: 

```javascript
const firstResponse = await guard.parse('Hello World!');
```

The guard will generate additional context in the prompt to enforce whatever limits you specify using your guards. In this simple example, this will be restricting the output to a string of 10 characters or less. This could also include more complex guards, such as testing the output you’ve received from an LLM’s attempt to [extract information from an unstructured PDF file](https://www.guardrailsai.com/blog/ai-information-retrieval-guardrails).

## Validating LLM Output

Now let's change the code to connect to OpenAI and examine its output. 

1. Install OpenAI for Node.js: 

```bash
npm install --save openai
```

2. Log in to OpenAI and [create an API key](https://platform.openai.com/docs/quickstart) to use with your code. 

3. Set the OpenAI key as an environment variable. For the Bash shell, you can use an export command in your .bash_profile: 

```bash
export OPENAI_API_KEY=<API_KEY>
```

4. Save the following code to the file `test-openai.js`:

```javascript
import assert from 'node:assert';
import process from 'node:process';
import { Guard, Validators, exit } from '@guardrails-ai/core';
import OpenAI from "openai";

const openai = new OpenAI();

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
  exit();
});

async function main () {
  try {
    const guard = await Guard.fromString(
      [await Validators.ValidLength(1, 10, 'noop')],
      {
        description: 'A word.',
        prompt: 'Generate a single word with a length between 1 and 10.'
      }
    );

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant. Please generate a word with a length of between 1 and 10 characters. Do not exceed 10 characters in length. Return only this word in your output." }],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);

    const firstResponse = await guard.parse(completion.choices[0].message['content']);
    console.log("first response: ", JSON.stringify(firstResponse, null, 2));
    assert.equal(firstResponse.validationPassed, true);
    assert.equal(guard.history.at(0).status, 'pass');

    const completion2 = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant. Please generate a word with a length of between 11 and 20 characters. Do not exceed 20 characters in length. Do not include punctuation." }],
      model: "gpt-3.5-turbo",
    });
    
    console.log(completion.choices[0]);

    const secondResponse = await guard.parse(completion2.choices[0].message['content']);
    console.log("second response: ", JSON.stringify(secondResponse, null, 2));
    assert.equal(secondResponse.validationPassed, true);
    assert.equal(guard.history.at(1).status, 'pass');

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
await main();
```

5. Run this code with your 

```bash
node ./test-openai.js
```

6. Examine the output of the program, which will look something like this: 

```
{
  index: 0,
  message: { role: 'assistant', content: 'Wonderful' },
  logprobs: null,
  finish_reason: 'stop'
}
first response:  {
  "rawLlmOutput": "Wonderful",
  "validatedOutput": "Wonderful",
  "validationPassed": true,
  "error": null
}
second response:  {
  "rawLlmOutput": "Granddaughter",
  "validatedOutput": "Granddaugh",
  "validationPassed": true,
  "error": null
}
```

You'll note that Guardrails "fixed" the second word that was greater than 10 characters by truncating it. This probably isn't the behavior you desire, so let's fix it. 

7. To cause Guardrails to fail and return an error when an LLM returns an incorrect response, change the `Guard.fromString()` call [to use a different on_fail policy](https://www.guardrailsai.com/docs/hub/concepts/on_fail_policies):

```
const guard = await Guard.fromString(
    [await Validators.ValidLength(1, 10, 'noop')],
```

8. Run the application again with `node ./test-openai.js`. You should now see error output due to a failed assertion. 

```
second response:  {
  "rawLlmOutput": "Resplendence",
  "validationPassed": false,
  "error": null
}
AssertionError [ERR_ASSERTION]: false == true
    at main (file:///home/jayallen/guardrails/test-gr.js:43:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async file:///home/jayallen/guardrails/test-gr.js:52:1 {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: false,
  expected: true,
  operator: '=='
}
```

### Explanation of the Code

There’s a key difference in how the Python and Javascript Guardrails APIs work. In the Python Guardrails API, you can pass the LLM you want to call directly to Guardrails, which calls it on your behalf. For the Javascript API, you call the LLM directly and pass the results to the Guardrails parse() method for validation. 

To call OpenAI, you add the following to the top of your Node file: 

```javascript
import OpenAI from "openai";

const openai = new OpenAI();
```

Next, within the main method, you call the OpenAI API’s completions.create() method:

```javascript
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant. Please generate a single word with a length of between 1 and 10 characters. Do not exceed 10 characters in length. Do not include punctuation." }],
      model: "gpt-3.5-turbo",
    });
```

You can print out the result of this to see the format of the OpenAI response: 

console.log(completion.choices[0]);

It should look something like this: 

```json
{
  index: 0,
  message: { role: 'assistant', content: 'Wonderful' },
  logprobs: null,
  finish_reason: 'stop'
}
```

You can supply this to Guardrails for validation like so. Note that, in the code below, we’ve removed the string equality assertions, since we don’t know what word the LLM will output.

```javascript
    const firstResponse = await guard.parse(completion.choices[0].message['content']);
    console.log("first response: ", JSON.stringify(firstResponse, null, 2));
    assert.equal(firstResponse.validationPassed, true);
    assert.equal(guard.history.at(0).status, 'pass');
```

You can do something similar for the second set of assertions. In this block, we  purposefully ask the LLM for a word longer than 10 characters: 

```javascript
    const completion2 = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant. Please generate a word with a length of between 11 and 20 characters. Do not exceed 20 characters in length. Do not include punctuation." }],
      model: "gpt-3.5-turbo",
    });

    const secondResponse = await guard.parse(completion2.choices[0].message['content']);
    console.log("second response: ", JSON.stringify(secondResponse, null, 2));
    assert.equal(secondResponse.validationPassed, true);
    assert.equal(guard.history.at(1).status, 'pass');
```