import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
let userInput = readString('user-text');
let numberOfTimes = readNumber('skip-size');


  // create a new string with skipped characters
let skipString = "";
for(let i = 0; i< userInput.length; i = i + numberOfTimes)
   skipString += userInput[i]
  // display the skipped string

  display('skipped-output', skipString)
});
