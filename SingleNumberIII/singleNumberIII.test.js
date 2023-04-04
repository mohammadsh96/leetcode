const {singleNumber}=require('./index')
describe('singleNumber', () => {
  it('returns the single number in the array where every other element appears three times', () => {
    expect(singleNumber([2, 2, 3, 2])).toEqual(3);
    expect(singleNumber([-1, 2, -1, 2, -1, 2, 5])).toEqual(5);
    expect(singleNumber([1, 1, 1, 5, 5, 5, 7])).toEqual(7);
    expect(singleNumber([-10, 10, 5, 10, 5, 10, -10, 7, 7, -10, 7])).toEqual(7);
    expect(singleNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11])).toEqual(11);
    expect(singleNumber([4, 4, 2, 2, 1, 1, 6, 6, 8, 8, -10, -10, -10])).toEqual(-10);
  });
});
  