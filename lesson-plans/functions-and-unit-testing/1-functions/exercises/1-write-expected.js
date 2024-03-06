'use strict';

console.log('-- begin --');

// fill in the blanks to pass the assertions
// fill in the documentation to describe the function

const scramble = (param1, param2, param3) => {
  const result = param3 + param1 + param2;
  return result;
};

// para1 = 2; a
// para2 = 3; c
// para3 = 1; b

const _1_actual = scramble('a', 'c', 'b');
const _1_expect = scramble('a', 'c', 'b');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = scramble('a', 'b', 'c');
const _2_actual = scramble('a', 'b', 'c');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = scramble('c', 'b', 'a');
const _3_actual = scramble('c', 'b', 'a');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = scramble('b', 'a', 'c');
const _4_actual = scramble('b', 'a', 'c');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = scramble('b', 'c', 'a');
const _5_actual = scramble('b', 'c', 'a');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = scramble('c', 'a', 'b');
const _6_actual = scramble('c', 'a', 'b');
console.assert(_6_actual === _6_expect, 'Test 6');

console.log('-- end --');
