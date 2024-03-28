// #todo

'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = '';
while (true) {
  userInput = prompt('enter a word to filter:');

  /* -- BEGIN: validate input -- */
  if (userInput !== null && userInput !== ''){
    break;
  }

  /* -- END: validate input -- */
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

let toRemove = '';
if (removeVowels) {
  toRemove = 'aeiouAEIOU';
} else {
  toRemove = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
}

let filteredInput = '';
/* -- BEGIN: filter input -- */
for(let character of userInput){
  if (!toRemove.includes(character)){
    filteredInput += character
  }
}

/* -- END: filter input -- */

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
