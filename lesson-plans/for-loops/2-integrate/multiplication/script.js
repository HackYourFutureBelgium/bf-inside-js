import { display, readNumber } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;
  // read user values
  const leftNum = readNumber('left');
  const rightNum = readNumber('right');

  // use a for loop to multiply the two numbers
  let result = leftNum * rightNum;

  // display the product
  display('product', result);
});
