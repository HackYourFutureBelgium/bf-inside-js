import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
   const text = readString('user-text');
  const number = readNumber('number-of-times');


  // repeat the string
  let result = '';

  for(let i = 0; i < number; i++){
    result += text;
  }

  // display the repeated string
  display('repeated-output', result);

});
