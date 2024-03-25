/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return [];
};

describe('twoSums: return indices of the two numbers such that they add up to target', () => {
  it('if two arrays are empty', () => {
    const returned = twoSum([], 9);
    expect(returned).toEqual([]);
  });

   it('if an array of integers nums  and an integer target ', () => {
   const returned = twoSum([ 2, 3, 4], 5);
    expect(returned).toEqual([0, 1]);
  });
  
  it('if an array of integers nums  and an integer target ', () => {
   const returned = twoSum([ 2, 3, 5, 7], 12);
    expect(returned).toEqual([2, 3]);
  });

  it('if an array of integers nums  and an integer target ', () => {
   const returned = twoSum([ 2, 3, 5, 7, 9], 14)
    expect(returned).toEqual([2, 4]);
  });

});