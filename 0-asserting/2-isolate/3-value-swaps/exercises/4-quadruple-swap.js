// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'z';
let c = 'w';
let d = 'x';
let temp;

// --- swap values ---
temp = a;
console.assert(temp === 'y', 'Step 1.1');
console.assert(a === 'y', 'Step 1.2');

a = c;
console.assert(a === 'w', 'Step 2.1');
console.assert(c === 'w', 'Step 2.2');

c = temp;
console.assert(temp === 'y', 'Step 3.1');
console.assert(c === 'y', 'Step 3.2');

temp = b;
console.assert(temp === 'z', 'Step 7.1');
console.assert(b === 'z', 'Step 7.2');

b = d;
console.assert(b === 'x', 'Step 8.1');
console.assert(d === 'x', 'Step 8.2');

d = temp;
console.assert(d === 'z', 'Step 9.1');
console.assert(temp === 'z', 'Step 9.2');


// --- test final values ---

const test1 = a === 'w';
console.assert(test1, 'Test 1');

const test2 = b === 'x';
console.assert(test2, 'Test 2');

const test3 = c === 'y';
console.assert(test3, 'Test 3');

const test4 = d === 'z';
console.assert(test4, 'Test 4');

const test5 = temp === 'z';
console.assert(test5, 'Test 5');

console.log('-- end --');
