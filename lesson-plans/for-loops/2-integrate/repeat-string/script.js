import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
let userInput = readString('user-text');
let numberOfTimes = readNumber('number-of-times'); 5
let resultString =  '';

  // repeat the string
  let newString ="";
for (let i = 0; i < numberOfTimes; i++) {
  newString += userInput;
}
  // display the repeated string
  display('repeated-output', newString);
});
