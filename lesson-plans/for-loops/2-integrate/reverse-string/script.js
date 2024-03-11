import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text
let userInput = readString('user-text');

  // use a for loop that counts down (i--) to reverse the input
let reverseStr = userInput.split('').reverse().join('')
console.log(reverseStr);
  // display the reversed string
  display('reversed-output', reverseStr);
});
