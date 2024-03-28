/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const sym = { 'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
     
     let total = 0;
      for (let i = 0; i < s.length; i++){
         let curr = sym[s[i]];
         let next = sym[s[i + 1]];

         if(curr < next){
           total += next - curr;
           i++;
         } else {
           total += curr;
         } 
         }return total;
      } ;
      

describe('romanToInteger function', () => {
  it('should return 0 for an empty string', () => {
        expect(romanToInt('')).toBe(0);
  });

  it('should return an integer', () => {
        expect(romanToInt('IV')).toBe(4);
  });

  it('should return an integer', () => {
        expect(romanToInt('LVIII')).toBe(58);
  });

  it('should return an integer', () => {
        expect(romanToInt('MCMXCIV')).toBe(1994);
  });



  /*it('should return 0 for an invalid Roman numeral', () => {
        expect(romanToInt('ABC')).toBe(0);
        expect(romanToInt('DDDD')).toBe(0);
        expect(romanToInt('YYYY')).toBe(0);
        expect(romanToInt('NNNN')).toBe(0);
  });*/
});