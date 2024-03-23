import {readNumber, displayString} from '../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;
console.log("toRepeat");
  // read user values
  const leftNumber = readNumber('left');
  const rightNumber = readNumber('right');

  // use a for loop to multiply the two numbers
  const result = leftNumber * rightNumber;


  // display the product
  displayString('product', 'a * b -> ' + result);
});