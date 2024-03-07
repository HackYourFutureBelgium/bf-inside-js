
 import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('__').addEventListener('click', () => {
  debugger;

  // read user values
  const left = readNumber('left'); 
  const right = readNumber('right'); 

  // use a for loop to multiply the two numbers
  const result = left * right;
  }

  // display the product
  display('product' , result)
});
