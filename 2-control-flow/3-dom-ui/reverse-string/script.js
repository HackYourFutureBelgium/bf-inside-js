import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text
  const text = readString('user-text');

  let result = '';
  // use a for loop that counts down (i--) to reverse the input
  for (let i = text.length - 1; i >= 0; i--) {
     let temp = text[i];
    reversedText += temp;
  }
  // display the reversed string
   display('reversed-output', result);
});
