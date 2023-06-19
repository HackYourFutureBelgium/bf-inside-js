'use strict';

// experiment with different values
const a = false;
const b = true;

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
