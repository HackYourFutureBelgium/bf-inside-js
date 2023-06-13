import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  // read user text
  const text = readString('user-text');

  // use a for loop that counts down (i--) to reverse the input
  let reversedText = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }

  // display the reversed string
  display('reversed-output', reversedText);
});