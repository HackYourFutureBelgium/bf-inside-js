import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  const left = readNumber('left');
  const right = readNumber('right');
  // calc two nambers
  const result = left * right;
  // display the product
  display('product', result);
});
