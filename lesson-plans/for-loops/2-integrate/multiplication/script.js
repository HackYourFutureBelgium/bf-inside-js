import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
 const number1 = readNumber('left');
 const number2 = readNumber('right');
  // use a for loop to multiply the two numbers
 let result = 0;
 for (let i = 0; i < number2; i++){
   result = result + number1;
 }
  // display the product
display('product', result);
});