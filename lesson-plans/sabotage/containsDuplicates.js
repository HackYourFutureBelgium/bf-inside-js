/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (nums.length > 1) {
    let numSet = new Set();
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (numSet.has(num)) {
        return true; // Duplicate found
      }
      numSet.add(num);
    }
  }
  return false;
};


describe('containsDuplicates: contains duplicate numbers', () => {
  it('empty string does not contain any number', () => {
    const returned = containsDuplicate('', false);
    expect(returned).toEqual(false);
  });

  it('check for non empty strings:', () => {
    const returned = containsDuplicate('cat', false);
    expect(returned).toEqual(false);
  });

  it('check for an array having different numbers:', () => {
    const returned = containsDuplicate([1, 2], false);
    expect(returned).toEqual(false);
  });

  it('check for an array having same numbers:', () => {
    const returned = containsDuplicate([2, 2, 3], true);
    expect(returned).toEqual(true);
  });
});