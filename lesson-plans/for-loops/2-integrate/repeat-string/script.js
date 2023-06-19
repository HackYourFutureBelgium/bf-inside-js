import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  // debugger;

  // read user values
  const userString = readString('user-text');
  const userNumber = readNumber('number-of-times');
  // repeat the string
  let newString = '';
  for (let i = 0; i < userNumber; i++) {
    newString += userString;
  }
  // display the repeated string
  display('repeated-output', newString);
});
