import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  // debugger;

  // read user values
  const userString = readString('user-text');
  const userNumber = readNumber('number-of-times');

  // repeat the characters in the text
  let newString = '';
  for (let i = 0; i < userString.length; i++) {
    for (let num = 0; num < userNumber; num++) {
      newString += userString[i];
    }
  }

  // display the text with repeated characters
  display('repeated-output', newString);
});
