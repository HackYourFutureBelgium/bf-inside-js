// #todo

'use strict';

let userInput = '';
let isValidName = false;
while (!isValidName) {
  /* -- BEGIN: validate input -- */
  userInput = prompt('enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  if(userInput === null || userInput === ''){
     alert('nothing is not a name');
     continue;
  }

  const confirmMessage = 'is this correct?\n"' + userInput + '"';
  isValidName = confirm(confirmMessage);

  if(isValidName){
    isValidName = true;
  }
  /* -- END: validate input -- */
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
