
import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  // read user values
  const num1 = readNumber('left');
  const num2 = readNumber('right');

  // use a for loop to multiply the two numbers
  //const multiply = num1 * num2
  let multiply = 0;
  for (let i = 0; i < num2; i++) {
    multiply += num1;
  }


  // display the product
  display('product', multiply);
  
});



  

