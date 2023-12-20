import { python } from 'pythonia';

process.on('SIGTERM', () => {
  // @ts-ignore
  return python.exit();
});
process.on('SIGINT', () => {
  // @ts-ignore
  return python.exit();
});

export * from './guard.js';
export * from './types.js';
export * as Validators from './validators.js';