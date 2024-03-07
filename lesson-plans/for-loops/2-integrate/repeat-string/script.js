import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  const text = readString('user-text');
  const repeationNumbers = readNumber('number-of-times');

  // repeat the string
  let newString = '';

  for (let i = 0; i < repeationNumbers; i++) {
    newString += text;
  }

  // display the repeated string
  display('repeated-output', newString);
});
