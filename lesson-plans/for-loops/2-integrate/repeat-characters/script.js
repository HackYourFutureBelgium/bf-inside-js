import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

//   // read user values
let userInput = readString('user-text');
let numberOfTimes = readNumber('number-of-times');
let resultString =  '';


//   // repeat the characters in the text
for (let i = 0; i < userInput.length; i++) {
  for (let j = 0; j < numberOfTimes; j++) {
    resultString = resultString + userInput[i];
  }
}

//   // display the text with repeated characters
  display('repeated-output', resultString);
});
