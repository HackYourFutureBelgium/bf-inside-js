import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById("do-math").addEventListener('click', () => {
  debugger;

let left = readNumber("left");
let right = readNumber("right");

let result = 0;

for(let i = 0; i < right; i++) {

  result = result + left;
  
}

display ( "product", result)
  // read user values

  // use a for loop to multiply the two numbers

  // display the product
});
