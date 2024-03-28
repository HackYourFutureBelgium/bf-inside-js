// #todo

'use strict';

console.log('-- begin --');

let global = 'turtle';

const jazz = () => {
  const local = 'jazzy';
  global = `${global}!`;
  return `${global} ${local}`;
};

const jazzReturn1 = jazz();
const jazzTest1 = jazzReturn1 === 'turtle! jazzy';
console.assert(jazzTest1, 'Test 1: jazz');

const globalTest1 = global === 'turtle!';
console.assert(globalTest1, 'Test 2: global');

global = `!`;

const globalTest2 = global === '!';
console.assert(globalTest2, 'Test 3: global');

const jazzReturn2 = jazz();
const jazzTest2 = jazzReturn2 === '!! jazzy';
console.assert(jazzTest2, 'Test 4: jazz');

const globalTest3 = global === '!!';
console.assert(globalTest3, 'Test 5: global');

global = `_${global}_`;

const globalTest4 = global === '_!!_';
console.assert(globalTest4, 'Test 6: global');

const jazzReturn3 = jazz();
const jazzTest3 = jazzReturn3 === '_!!_! jazzy';
console.assert(jazzTest3, 'Test 7: jazz');

const globalTest5 = global === '_!!_!';
console.assert(globalTest5, 'Test 8: global');

global = `${global}. bye!`;

const globalTest6 = global === '_!!_!. bye!';
console.assert(globalTest6, 'Test 9: global');

console.log('-- end --');
