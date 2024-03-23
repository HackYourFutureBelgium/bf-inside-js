// #todo

'use strict';

console.log('-- begin --');

// fill in the blanks to pass the assertions
//  there will only be one correct answer

const _1_expect = true;
const _1_actual = !0;
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = true;
const _2_actual = !false;
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = !undefined;
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = !null;
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = true;
const _5_actual = !'';
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = true;
const _6_actual = !NaN;
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = false;
const _7_actual = !'fdsa';
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = false;
const _8_actual = !'true';
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = false;
const _9_actual = !1;
console.assert(_9_actual === _9_expect, 'Test 9');

console.log('-- end --');
