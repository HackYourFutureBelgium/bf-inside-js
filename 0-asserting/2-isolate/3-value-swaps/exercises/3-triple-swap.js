// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'z';
let b = 'x';
let c = 'y';
let temp;

// --- swap values ---
temp = a;
console.assert( temp === 'z', 'Step 1.1');
console.assert( a === 'z', 'Step 1.2' );

a = b;
console.assert( a === 'x', 'Step 2.1');
console.assert( b === 'x', 'Step 2.2' );

b = temp;
console.assert( b === 'z', 'Step 3.1');
console.assert( temp === 'z', 'Step 3.2' );

temp = b;
console.assert( temp === 'z', 'Step 4.1');
console.assert( b === 'z', 'Step 4.2' );

b = c;
console.assert( b === 'y', 'Step 5.1');
console.assert( c === 'y', 'Step 5.2' );

c = temp;
console.assert( c === 'z', 'Step 1.1');
console.assert( temp === 'z', 'Step 1.2' );


// --- test final values ---

const test1 = a === 'x';
console.assert(test1, 'Test 1');

const test2 = b === 'y';
console.assert(test2, 'Test 2');

const test3 = c === 'z';
console.assert(test3, 'Test 3');

const test4 = temp === 'z';
console.assert(test4, 'Test 4');

console.log('-- end --');
