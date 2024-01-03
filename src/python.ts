import { python, py } from 'pythonia';

function exit () {
  // @ts-ignore
  python.exit();
}

export {
  python,
  py,
  exit
};