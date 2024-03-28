// #todo

'use strict';

console.log('-- begin --');

/* fill in the blanks to pass the assertions

  pay close attention to how each variable is used!
  - is a variable assigned a value when it is declared?
  - is a variable reassigned later in the script?

  your challenge is to decide whether to use let or to use const
  - use let if
    the variable is declared without an assignment
    or the variable is ever reassigned later in the script
  - use const if
    the variable is declared with a value and never reassigned

*/

let aTree = '';
console.assert(aTree === '', 'Test 1');

aTree = 'birch';
console.assert(aTree === 'birch', 'Test 2');

let turtle = 'myrtle';
console.assert(turtle === 'myrtle', 'Test 3');

aTree = 'aspen';
console.assert(aTree === 'aspen', 'Test 4');

let aColor = 'blue';
console.assert(aColor === 'blue', 'Test 5');

console.assert(turtle === 'myrtle', 'Test 6');

aTree = 'oak';
console.assert(aTree === 'oak', 'Test 7');

aColor = 'orange';
console.assert(aColor === 'orange', 'Test 8');

console.log('-- end --');
