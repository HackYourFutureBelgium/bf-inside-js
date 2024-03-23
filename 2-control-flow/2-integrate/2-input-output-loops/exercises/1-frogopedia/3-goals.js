// #todo

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('tell me something about frogs');
   console.log('userInput:', typeof userInput, userInput);

  /* -- BEGIN: validate input -- */
 

  // check if the user entered nothing, or clicked cancel
  if (userInput === null || userInput === '') {
    alert('that is not something');
    continue;
  }

  // search the user input for "frog", upper or lower case
  if (userInput.toLowerCase().includes('frog')) {
    inputIsAboutFrogs = true;
    continue;
  }

  alert('nope, not about frogs.  try again.');


  /* -- END: validate input -- */
}

const finalMessage =

  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
