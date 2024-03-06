import { display, readNumber, readString } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userInput = readString('user-text');
  const count = readNumber('number-of-times')

  // repeat the characters in the text
  let newText = "";

  for (let i = 0; i < userInput.length; i++) {
    for (let j = 0; j < count; j++) {
      newText += userInput[i]
    }
  }
  // display the text with repeated characters
  display('repeated-output', newText)
});
