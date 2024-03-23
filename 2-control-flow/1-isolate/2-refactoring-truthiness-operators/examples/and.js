'use strict';

// experiment with different values
const a = 2;
const b = 4;

// "and" expression
const andValue = a && b;

// conditional statement
let conditionalValue;
if (Boolean(a) === false) {
  conditionalValue = a;
} else {
  conditionalValue = b;
}

console.assert(andValue === conditionalValue, 'always the same!');
