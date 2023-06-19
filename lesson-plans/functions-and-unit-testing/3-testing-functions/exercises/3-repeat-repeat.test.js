'use strict';

/**
 * Repeats a string with each character repeated.
 *
 * @param {string} text - The string that will be repeat-repeated.
 * @param {number} repeats - How many times to repeat the characters and string.
 * @returns {string} The string with repeated characters, repeated.
 */
const repeatRepeat = (text, repeats) => {
  let repeated = '';
  for (let i = 0; i < text.length; i++) {
    repeated += text[i].repeat(repeats);
  }
  repeated = repeated.repeat(repeats);
  return repeated;
};
//   let newString = '';
//   for (let i = 0; i < text.length; i++) {
//     newString += text[i].repeat(repeats);
//   }

//   let newOneString = '';
//   for (let j = 0; j < repeats; j++) {
//     newOneString += newString;
//   }
//   return newOneString;
// };

describe('repeatRepeat: repeats each character and the whole string', () => {
  it('repeat-repeats 0 times', () => {
    const returned = repeatRepeat('hoy!', 0);
    expect(returned).toEqual('');
  });
  it('repeat-repeats 1 time', () => {
    const returned = repeatRepeat('aaaa', 1);
    expect(returned).toEqual('aaaa');
  });
  it('repeat-repeats 2 times', () => {
    const returned = repeatRepeat('Hi', 2);
    expect(returned).toEqual('HHiiHHii');
  });
  it('repeat-repeats 3 times', () => {
    const returned = repeatRepeat('abc', 3);
    expect(returned).toEqual('aaabbbcccaaabbbcccaaabbbccc');
  });
  it('repeat-repeats an empty string 12 times', () => {
    const returned = repeatRepeat('', 12);
    expect(returned).toEqual('');
  });
});
