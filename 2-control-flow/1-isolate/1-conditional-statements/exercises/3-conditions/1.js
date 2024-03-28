// #todo

'use strict';

console.log('-- begin --');

// write a condition to take the correct path
//  use both value1 & value2 in your expression
// there will be more than one right answer
//  try to find as many as you can
//  what do these solutions have in common?

const value1 = 'hello';
const value2 = false;
let path = '';

if (!value1 && value2) { 
  path = 'if';
} else { (value1 && !value2)
  path = 'else';
}

console.assert(path === 'else', 'path should be "else"');

console.log('-- end --');
