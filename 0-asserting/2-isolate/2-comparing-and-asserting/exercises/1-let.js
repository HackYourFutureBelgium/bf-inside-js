// #todo

'use strict';

console.log('-- begin --');

let letters = 'c';
console.assert(letters === 'c', 'Test 1');

letters = 'b' + letters;
console.assert(letters === 'bc', 'Test 2');

letters = letters + 'd';
console.assert(letters === 'bcd', 'Test 3');

letters = 'a' + letters;
console.assert(letters === 'abcd', 'Test 4');

letters = letters + 'e';
console.assert(letters === 'abcde', 'Test 5');

console.log('-- end --');
