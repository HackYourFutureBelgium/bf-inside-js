import { display, readNumber, readString } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  const indexNum = readNumber('skip-size');
  const userInput = readString('user-text')


  // create a new string with skipped characters
  let newText = "";
  for (let i = 0; i < userInput.length; i = i + indexNum) {
    newText += userInput[i]
  }


  // display the skipped string
  display('skipped-output', newText)
});
