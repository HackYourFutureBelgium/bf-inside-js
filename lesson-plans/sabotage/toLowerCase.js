/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let str1 = s.toLowerCase();
     return str1;
};


describe('A string is a string replacing every letter to lower case.', () => {
  it('should return an empty string when given an empty sentence', () => {
  let returned = toLowerCase('');
  expect(returned).toBe('');
  });

  it('non empty should return to lower case', () => {
  let returned = toLowerCase("Hello");
  expect(returned).toBe("hello");
  });

  it('upperCase should return to lower case', () => {
  let returned = toLowerCase("LOVELY");
  expect(returned).toBe("lovely");
  });

  it('lowerCase should return to lower case', () => {
  let returned = toLowerCase("beautiful");
  expect(returned).toBe("beautiful");
  });
});    