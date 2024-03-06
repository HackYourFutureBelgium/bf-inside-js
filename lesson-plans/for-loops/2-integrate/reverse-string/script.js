import { display, readString } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userInput = readString('user-text')

  // use a for loop that counts down (i--) to reverse the input
  let newText = userInput.split('').reverse().join('');

  // display the reversed string
  display('reversed-output', newText)
});
