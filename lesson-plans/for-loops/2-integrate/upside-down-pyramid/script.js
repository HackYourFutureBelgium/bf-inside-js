import { display, readString } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userInput = readString('to-pyramid')

  // create the pyramid
  let pyramid = "";

  for (let i = 0; i < userInput.length; i++) {
    let row = userInput.substr(i) + '\n';
    pyramid += row;
  }

  // display the pyramid
  display('pyramided', pyramid)
});
