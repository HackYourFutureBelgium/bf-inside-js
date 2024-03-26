/**
 * @param {number} x
 * @return {number}
 */
var reverseInt= function(x) {
  let reversed  = 0;
  while(x != 0){
    const pop = x % 10;
    x =Math.trunc(x/ 10);
    reversed = (reversed * 10) + pop;
  }

    return reversed;
};

describe('reverseInt: check if a integer reversed or not', () => {
    it('should return same integer for single digit integer', () => {
        expect(reverseInt(5)).toBe(5);
        expect(reverseInt(9)).toBe(9);
});

    it('if integer is positive multi-digit number', () => {
        expect(reverseInt(135)).toBe(531);
        expect(reverseInt(5678)).toBe(8765);
});

    it('if integer is negative number', () => {
        expect(reverseInt(-6735)).toBe(-5376);
        expect(reverseInt(-438)).toBe(-834);
});

    it('if integer is having zero at unit place', () => {
        expect(reverseInt(120)).toBe(21);
        expect(reverseInt(-560)).toBe(-65);
});
});