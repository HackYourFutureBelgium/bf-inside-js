import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userInput = readString('to-pyramid');

  // create the pyramid
  let pyramId = '';
  for (let i = 0; i < userInput.length; i++) {
    let row = userInput.substr(i) + '\n';
    pyramId += row;
  }
  // for (let i = userInput.length; i > 0; i--) {
  //   let substring = '';
  //   for (let j = 0; j < i; j++) {
  //     substring += userInput[j];
  //   }
  //   pyramId += substring + '\n';
  // }
  // display the pyramid
  display('pyramided', pyramId);
});
