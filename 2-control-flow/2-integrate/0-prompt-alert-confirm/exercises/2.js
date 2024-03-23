// #todo

'use strict';

// fill in the blank to pass the assertion

const inputValue = prompt('asdf');

console.log(typeof inputValue, inputValue);

const inputAssertion =
  typeof inputValue === 'object' || typeof inputValue === 'string';

console.assert(inputAssertion, 'inputValue should be a string or an object');
