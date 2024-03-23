import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("repeat-them").addEventListener('click', () => {
  debugger;

  // read user values

  // repeat the characters in the text

  
  let number = readNumber("number-of-times");
  let text = readString("user-text");

  
  //let mytext = document.getElementById("user-text").value;
  
  let toRepeat = '';
  
  for (let i = 0 ; i < text.length; i++) {

    let temp = text[i];
   
    for (let j = 0; j < number; j++) {

    toRepeat = toRepeat + temp;
     
    }
  }

  display("repeated-output", toRepeat)

  // display the text with repeated characters
});
