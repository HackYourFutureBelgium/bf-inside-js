import { display, readNumber, readString } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  const userInput = readString('user-text');
  const count = readNumber('number-of-times');

  // repeat the string
  let newText = "";
  for (let i = 0; i < count; i++) {
    newText += userInput;
  }


  // display the repeated string
  display('repeated-output', newText)
});
