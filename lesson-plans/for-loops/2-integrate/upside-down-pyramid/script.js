import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
let userInput = readString('to-pyramid');

  // create the pyramid
  let pyramid = "";
  for(let i = 0; i< userInput.length; i++){
    let str = userInput.substr(i) + '\n';
    pyramid += str;
  }



  // display the pyramid
  display('pyramided', pyramid)
});
