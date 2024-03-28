// #todo

'use strict';

console.log('-- begin --');

const word = 'pitsicola';

let index = 0;
let logThisOne = true;
while (index < word.length - 1) {
  index++
  index += 1;

  logThisOne = !logThisOne;
  if (logThisOne) {
    continue;
  }

  const nextLetter = word[index];
  console.log(index + ': ', nextLetter); // i, s, c, l
}

console.assert(index === word.length - 1, 'there are this many letters in the word');

console.log('-- end --');
