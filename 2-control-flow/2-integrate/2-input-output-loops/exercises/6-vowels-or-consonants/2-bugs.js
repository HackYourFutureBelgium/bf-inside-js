// #todo

'use strict';

/* look out for:

  - loop check logic
  - variable declarations
  - assignment vs. comparison
  - wrong interaction functions
  - off-by-one in for loop

*/

let userInput = '';
let userConfirmed = false;
while (!userConfirmed) {
  const input = prompt('enter a word to filter:');

  if (input === '' || input === null) {
    alert('nope, enter something');
    continue;
  }

  // regular expression, this works!
  const whiteSpaceRegex = new RegExp('\\s', 'g');
  if (whiteSpaceRegex.test(input)) {
    alert("words can't have white space");
    continue;
  } 
    
    const confirmMessage =
      'do you want to filter this word?\n\n' + '- "' + input + '"';
    const userConfirm = confirm(confirmMessage);
    if (userConfirm) {
      userInput = input;
      userConfirmed = true;
    } else {
      continue;
  }
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

const toRemove = removeVowels ? 'aeiou' : 'bcdfghjklmnpqrstvwxyz';

let filteredInput = '';
for (let i = 0; i < userInput.length; i++) {
  const lowerCaseCharacter = userInput[i].toLowerCase();
  if (!toRemove.includes(lowerCaseCharacter)) {
    filteredInput += lowerCaseCharacter;
  }
}

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
