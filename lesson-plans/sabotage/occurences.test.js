const occurTime = (arrEle = [], occEle = 0) => {
  let occurred = 0;
  arrEle.forEach((ele)=>{
    ele === occEle && occurred++
  })
  return occurred;
};


describe('Occurred number in time', () => {
  test('[], 0 --> 0', () => {
    const returned = occurTime([], 0);
    expect(returned).toEqual(0);
  });
  test('[1,2,3,4], 4', () => {
    const returned = occurTime([1, 2, 3, 4], 4);
    expect(returned).toEqual(1);
  });
  test('[1,2,3,4], 0', () => {
    const returned = occurTime([1, 2, 3, 4]);
    expect(returned).toEqual(0);
  });
  test('[1,2,2,3,2,4], 0', () => {
    const returned = occurTime([1, 2, 2, 3, 2, 4], 2);
    expect(returned).toEqual(3);
  });
  test('[1,2,3,4,5], "Hello"', () => {
    const returned = occurTime([1, 2, 2, 3, 2, 4,5], "hello");
    expect(returned).toEqual(0);
  });
  test('[1,2,3, "Hello", "hello", 4,5], "hello"', () => {
    const returned = occurTime([1,2,3, "hello", "Hello", 4,5], "hello");
    expect(returned).toEqual(1);
  });
});
