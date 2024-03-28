'use strict';

// experiment with different values
const a = true;
const b = 'A';
const c = 'B';

// ternary expression
const ternaryValue = a ? b : c;

// conditional statement
let conditionalValue;
if (Boolean(a) === true) {
  conditionalValue = b;
} else {
  conditionalValue = c;
}

console.assert(ternaryValue === conditionalValue, 'always the same!');
