import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  let text = readString('user-text');
  let number = readNumber('number-of-times');

  // repeat the characters in the text

  let toRepeate = '';

  for (let i = 0; i < text.length; i++) {
    let temp = text[i];
    for (let j = 0; j < number; j++) {
      toRepeate += temp;
    }
  }
  // display the text with repeated characters
  display('repeated-output', toRepeate);
});
