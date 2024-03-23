// #todo

'use strict';

let validInput = '';

let index = 0;
let isValid = false;
while (!isValid) {
  index = index + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`,
  );

  /* -- BEGIN: validate input -- */
  if(userInput){
    const nthLetter = userInput[index - 1];
    if(nthLetter && (nthLetter.toLowerCase() === 'e')){
      validInput = userInput;
       isValid = true;
    }else{
      alert ('Invalid input. Please try again.');
    }
  } else {
    alert('Invalid input. Please try again');
  }
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
