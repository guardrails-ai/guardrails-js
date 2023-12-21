import { python } from 'pythonia';

process.on('SIGTERM', () => {
  // @ts-ignore
  return python.exit();
});
process.on('SIGINT', () => {
  // @ts-ignore
  return python.exit();
});

export {
  python
};