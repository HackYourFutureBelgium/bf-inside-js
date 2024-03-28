// #todo

'use strict';

/* look out for:

  - variable declarations
  - conditional check
  - break vs. continue
  - incorrect casting to Number

*/

let userNumber = NaN;
while (Number.isNaN(userNumber)) {
  const userInput = prompt('enter a number');

  if (userInput === '' || userInput === null) {
    alert('enter something!');
    break;
  }

  userNumber = parseFloat(userInput);

  if (Number.isNaN(userNumber)) {
    alert('"', userInput, '" is not a number');
  }
}

if (userNumber % 2 === 0) {
  alert(userNumber + ' is even');
} else {
  alert(userNumber + ' is odd');
}
