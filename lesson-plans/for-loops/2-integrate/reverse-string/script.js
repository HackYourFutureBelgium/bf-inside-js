import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById("reverse-it").addEventListener('click', () => {
  debugger;


let text = readString("user-text");

let result = '';



for( let i = text.length -1 ; i >= 0; i--) {

let temp = text[i];

  result = result + temp;

}  

display("reversed-output", result);
  // read user text

  // use a for loop that counts down (i--) to reverse the input

  // display the reversed string
});
