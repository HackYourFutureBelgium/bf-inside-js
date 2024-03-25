/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    const xStr = x.toString();
    
    return xStr === xStr.split('').reverse().join('');

};



describe('isPalindrome: check if a number is a palindrome', () => {
    it('should return true for single digit numbers', () => {
        expect(isPalindrome(0)).toBe(true);
        expect(isPalindrome(9)).toBe(true);
});

    it('should return true for palindromic numbers', function() {
        expect(isPalindrome(121)).toBe(true);
        expect(isPalindrome(12321)).toBe(true);
    });

    it('should return false for non-palindromic numbers', function() {
        expect(isPalindrome(123)).toBe(false);
        expect(isPalindrome(123456789)).toBe(false);
    });

    it('should return false for negative numbers', function() {
        expect(isPalindrome(-121)).toBe(false);
        expect(isPalindrome(-12321)).toBe(false);
    });

});