import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById("skip-them").addEventListener('click', () => {
  debugger;

let number = readNumber("skip-size");

let text = readString("user-text");

let result = '';

for (let i = 0 ; i < text.length; i = i + number) {

  result =  result + text[i] ; 
}



display("skipped-output", result);
  // read user values

  // create a new string with skipped characters

  // display the skipped string
});
