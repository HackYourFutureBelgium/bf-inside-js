import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  // debugger;

  // read user values
  const text = readString('user-text');
  const repetationNumbers = readNumber('number-of-times');

  // repeat the characters in the text
  let newText = '';

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < repetationNumbers; j++) {
      newText += text[i];
    }
  }

  // display the text with repeated characters
  display('repeated-output', newText);
});
