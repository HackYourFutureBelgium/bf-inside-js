/**
 * @param {number} num
 * @return {string}
 */

/*
1. create sum variable
2. Loop through s.
   a. Create  "prev" variable
   b. create switch cases for each possible varibles as a value
3. return sum   
*/
let numbersAndNumerals = [
  { number: 1000, roman: 'M' },
  { number: 900, roman: 'CM' },
  { number: 500, roman: 'D' },
  { number: 400, roman: 'CD' },
  { number: 100, roman: 'C' },
  { number: 90, roman: 'XC' },
  { number: 50, roman: 'L' },
  { number: 40, roman: 'XL' },
  { number: 10, roman: 'X' },
  { number: 9, roman: 'IX' },
  { number: 5, roman: 'V' },
  { number: 4, roman: 'IV' },
  { number: 1, roman: 'I' }
];

var intToRoman = function(num) {
  let romanNumral = '';
    for (let i = 0; i <  numbersAndNumerals.length; i++){
      while(numbersAndNumerals[i].number <= num){
        num -= numbersAndNumerals[i].number;

        romanNumral += numbersAndNumerals[i].roman;
      }
    }
  
    return romanNumral;
};
describe('integerToRoman function', () => {
  it('should return empty string for 0', () => {
        expect(intToRoman(0)).toBe('');
  });

  it('should return a roman ', () => {
        expect(intToRoman(10)).toBe('X');
  });

  it('should return a roman ', () => {
        expect(intToRoman(58)).toBe('LVIII');
  });

  it('should return a roman ', () => {
        expect(intToRoman(1994)).toBe('MCMXCIV');
  });

  it('should return a roman ', () => {
        expect(intToRoman(686)).toBe('DCLXXXVI');
  });
});