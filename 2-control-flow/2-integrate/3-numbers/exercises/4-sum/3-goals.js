// #todo

'use strict';

const instructions =
  'calculate the sum of many numbers:\n\n' +
  '- you must input something\n' +
  '- input a number and it will be added to the sum\n' +
  '- input "done" and the program will finish (case insensitive)\n' +
  '- input anything else and it will be ignored';
alert(instructions);

let sum = 0;
let userInput = '';
let isDone = false;

while (!isDone) {
  userInput = prompt('enter a number to add, or "done" to finish');

  /* -- BEGIN: handle user input - nothing, done, a number or not a number -- */
    if (userInput === null){
      alert('You must input something!');
      continue;
    }

    userInput = userInput.trim();

    if (userInput.toLowerCase() === 'done'){
      isDone = true;
      continue;
    }
    const nextNumber = Number(userInput);

    if(Number.isNaN(nextNumber)){
      console.log('Ignoring input:', userInput)
      continue;
    }
  sum += nextNumber;
  console.log('Sum:', sum);
  }
  /* -- END -- */

const sumMessage = 'the sum of your numbers is: ' + sum;
alert(sumMessage);
