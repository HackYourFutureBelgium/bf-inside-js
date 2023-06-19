import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  // debugger;

  // read user text
  const userString = readString('user-text');

  // use a for loop that counts down (i--) to reverse the input
  let newString = '';
  for (let i = userString.length -1; i >= 0; i--) {
    newString += userString[i];
  }
  // display the reversed string
  display('reversed-output', newString);
});
