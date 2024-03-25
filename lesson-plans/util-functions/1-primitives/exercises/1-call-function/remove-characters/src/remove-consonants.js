import { display, readString } from '../../../../../../../lib/dom-io.js';

import { removeCharacters } from './utils/remove-characters.js';

const removeConsonants = () => {
  debugger;

  // --- read user input ---
  const userText = readString('user-text');

  // --- remove all consonants from the input ---
  //  use `removeCharacters` to write this step of the program
  const removedCons = (input) => {

    const vowels = "aeiou";
    let removedCons = [];
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      if (vowels.includes(char)) {
        removedCons.push(removeCharacters(char))
      }
    }
    return removedCons.join('');
  }

  let noConsonants = removedCons(userText)



  // --- display the input with no consonants ---
  display('removified', noConsonants);
};

document
  .getElementById('consonants')
  .addEventListener('click', removeConsonants);
