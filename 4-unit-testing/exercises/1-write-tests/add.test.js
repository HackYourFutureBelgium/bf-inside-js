// #todo

'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
const sum = (x = 0, y = 0) => {
  return x + y;
};

describe('Add two numbers together', () => {
  describe('both numbers are positive', () => {
    it('not passing any argument should return 0', () => {
      const expected = 0;
      const actual = sum();
      expect(actual).toEqual(expected);
    });

    it('pass x and not pass y should return x',() => {
      const expected = 10;
      const actual = sum(10);
      expect(actual).toEqual(expected);
    });

   it('10 and 20 should return 30', () => {
      const expected = 30;
      const actual = sum(10, 20);
      expect(actual).toEqual(expected);
    });
  }); 
    // ...
  
  describe('both numbers are negative', () => {
    it('-10 and -20 should return -30', () => {
      const expected = -30;
      const actual = sum(-10, -20);
      expect(actual).toEqual(expected);
    });
    // ...
    it('pass x -20 and not pass y should return -20', () =>{
      const expected = -20;
      const actual = sum (-20);
      expect(actual).toEqual(expected); 
    });
  });
  // ...
});
