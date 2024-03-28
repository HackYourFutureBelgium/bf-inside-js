// #todo

'use strict';

let userInput = '';
let repetitions = NaN;
while (true) {
  /* -- BEGIN: gather input and cast it to a number -- */
  userInput = prompt('Enter a phrase to repeat:');
  const repetitionsInput = prompt('How many times do you want to repeat it?');
  repetitions = parseInt(repetitionsInput);
  

  if (Number.isNaN(repetitions)) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }

  /* -- BEGIN: ask the user to confirm their input -- */
  const confirmMessage = ` Is this correct?\n\n- "${userInput}\n -${repetitions}`
  const confirmation = confirm(confirmMessage); 
  /* -- END -- */
  if (confirmation){
    break;
  }
}

/* -- BEGIN: repeat the input -- */

let  repeatedInput = '';

for (let i = 0 ; i < repetitions; i++);
repeatedInput += userInput;

/* -- END -- */

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);
