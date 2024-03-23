// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a condition instead of ||

// try different values and different types
const firstName = 'Pallavi';
const lastName = 'Sarwar';
console.log(firstName, lastName);

//const hasAnAName = firstName[0] === 'A' || lastName[0] === 'A';

let hasAnAName;
if (firstName[0] === 'P' || lastName[0] === 'A') {
  hasAnAName = true;
}
console.log(hasAnAName);

console.log('-- end --');
