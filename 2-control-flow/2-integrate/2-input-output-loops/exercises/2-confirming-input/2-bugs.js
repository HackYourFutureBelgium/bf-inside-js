// #todo

'use strict';

/* look out for:

  - look condition
  - conditional checks
  - which interaction functions are used

*/

let userInput = '';
let userConfirmed = true;
while (userConfirmed) {
  userInput = prompt('enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === null || userInput === '') {
    alert('nothing is not a name');
    continue;
  }

  const confirmMessage = 'is this correct?\n"' + userInput + '"';
  userConfirmed = alert(confirmMessage);

 if (userConfirmed){
   userConfirmed = true;
 }
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
