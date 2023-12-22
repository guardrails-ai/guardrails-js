import process from 'node:process';
import { Guard, Validators, exit } from './dist/index.js';

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
  exit();
});

async function call (guard, llmOutput) {
  const response = await guard.parse(llmOutput);
  console.log("response: ", JSON.stringify(response, null, 2));
}

async function main () {
  try {
    const ValidLength = await Validators.ValidLength;
    const guard = await Guard.fromString(
      [await ValidLength(1, 10)],
      {
        description: 'A word.',
        prompt: 'Generate a single word with a length betwen 1 and 10.'
      }
    );

    await call(guard, 'Hello World!');
    await call(guard, 'Hello World 2!');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  // exit();
}
await main();