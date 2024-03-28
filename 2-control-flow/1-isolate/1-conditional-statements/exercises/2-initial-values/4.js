// #todo

'use strict';

console.log('-- begin --');

// can you find at least one solution to reach each path?
//  what do all solutions to the same path have in common?
// or maybe there are unreachable paths!

const value1 = 4;
const value2 = '4.0';
let path = '';

if (value1 === value2) {
  path = 'if';
} else if (!value1 === !value2) {
  path = 'else if 1';
} else if (Number(value2) === Number(value1)) {
  path = 'else if 2';
} else if (!(value1 || value2)) {
  path = 'else if 3';
} else {
  path = 'else';
}

console.log(path === 'else if 1');

console.log('-- end --');
