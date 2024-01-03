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
      [await Validators.ValidLength(1, 10, 'reask')],
      {
        description: 'A word.',
        prompt: 'Generate a single word with a length betwen 1 and 10.'
      }
    );

    const firstResponse = await guard.parse('Hello World!', { fullSchemaReask: true });
    console.log("first response: ", JSON.stringify(firstResponse, null, 2));
    assert.equal(firstResponse.validationPassed, true);
    assert.equal(firstResponse.validatedOutput, 'Hello Worl');
    assert.equal(guard.history.at(0).status, 'pass');
    
    const secondResponse = await guard.parse('Hello World 2!');
    console.log("second response: ", JSON.stringify(secondResponse, null, 2));
    assert.equal(secondResponse.validationPassed, true);
    assert.equal(secondResponse.validatedOutput, 'Hello Worl');
    assert.equal(guard.history.at(1).status, 'pass');

    console.log('Reask prompt: ', guard.history.at(1).reask_prompts);

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
await main();