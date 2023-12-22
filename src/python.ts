import { python } from 'pythonia';

function exit () {
  // @ts-ignore
  python.exit();
}

export {
  python,
  exit
};