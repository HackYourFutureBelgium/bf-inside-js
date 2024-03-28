// #todo

'use strict';

let validInput = '';
let isNotValid = true;
while (isNotValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  /* -- BEGIN: validate input -- */
  if(userInput && userInput.length >= 5){
    if(userInput[4].toLowerCase() === 'e'){
      validInput = userInput;
      isNotValid = false;;
    } else{
      alert('Invalid input. Please try again');
    }
    } else {
      alert('Input is too short. Please try again.');
    }
  }
  /* -- END: validate input -- */


alert('done: "' + validInput + '"');
