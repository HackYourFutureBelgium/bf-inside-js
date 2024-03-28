/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {

  if(nums.length === 3){

  let a = nums[0], b = nums[1], c = nums [2];
  if(a === b && b === c){
    return "equilateral";
  }
  else if(a === b || b === c || a === c) {
    return "isosceles";
  }
  else {
    return "scalene";
    }
  }
  return "none";
};




describe('typesOfTriangle: checking if it is triangle or not', () => {
  it('if it is not a triangle', () => {
    const returned = triangleType([2]);
    expect(returned).toEqual('none');
  });

  it('if three sides are equal:', () => {
    const returned = triangleType([2, 2, 2]);
    expect(returned).toEqual('equilateral');
  });

  it('if two sides are equal:', () => {
    const returned = triangleType([1, 2, 2]);
    expect(returned).toEqual('isosceles');
  });

  it('if its a triangle having different sides:', () => {
    const returned = triangleType([2, 5, 3]);
    expect(returned).toEqual('scalene');
  });
});