// #todo

'use strict';

let validInput = '';
while (true) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');
  console.log('userInput:', typeof userInput, userInput);

  // make sure the user entered something
 if (userInput === null) {
    alert('Please enter something.');
    continue;
  };

  // make sure it is long enough to have an "e" in the 5th letter
    if (userInput.length < 5) {
    alert('too short');
    continue;
  }
;

  // check if the 5th character is an "e" or "E"
  if (userInput[4].toLowerCase() === 'e') {
    validInput = userInput;
    break;
  }

  alert('input has no "e" or "E" as the 5th character');
}

alert('done: "' + validInput + '"');
