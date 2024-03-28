// #todo

'use strict';

let userInput = '';
while (userInput === '') {
  /* -- BEGIN: validate input -- */
  userInput = prompt('Please enter some text:')
  /* -- END: validate input -- */
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
