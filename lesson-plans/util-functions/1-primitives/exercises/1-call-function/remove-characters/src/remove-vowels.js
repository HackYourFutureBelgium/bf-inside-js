import { display, readString } from '../../../../../../../lib/dom-io.js';

import { removeCharacters } from './utils/remove-characters.js';

export const removeVowels = () => {
  debugger;

  // --- read user input ---
  const userText = readString('user-text');

  // --- remove all vowels from the input ---
  //  use `removeCharacters` to write this step of the program

  const removedVowels = (input) => {
    return input.toLowerCase().replace(/[aeiou]/gi, '');
  }

  const noVowels = removedVowels(userText);

  // --- display the input with no vowels ---
  display('removified', noVowels);
};

document.getElementById('vowels').addEventListener('click', removeVowels);
