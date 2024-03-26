/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   let stack = [];
    let brackets = {
      '[' : ']',
      '{' : '}',
      '(' : ')',
    }
     for (let i = 0; i < s.length; i++ ){
       if (s[i] === '(' || s[i] === '{' ||  s[i] === '['){
         stack.push(s[i]);
       }
       else {
         let last = stack.pop();
         if (s[i] !== brackets[last]){
           return false;
         }
       }
     } if (stack.length !== 0){
        return false;
     }
     return true;
};

describe('isValid: check if the parentheses are valid ', () => {
    it('should return true for valid parentheses', () => {
        expect(isValid("()")).toBe(true);
        expect(isValid("(){}[]")).toBe(true);
        expect(isValid("[({})]")).toBe(true);
});

it('should return false for invalid parentheses', () => {
        expect(isValid("([)")).toBe(false);
        expect(isValid("({[])")).toBe(false);
        expect(isValid("[(]}]")).toBe(false);
});

it('should return true for empty parentheses', () => {
        expect(isValid("")).toBe(true);
});
});