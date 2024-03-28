import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("repeat-it").addEventListener('click', () => {
  debugger;




  let text = readString("user-text");
  let number = readNumber("number-of-times")

  let result = '';

  for(let i = 0; i < number; i++) {

    result = result + text;

  }

  display("repeated-output", result);
  // read user values

  // repeat the string

  // display the repeated string
});
