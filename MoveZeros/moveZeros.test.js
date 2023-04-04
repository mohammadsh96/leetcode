const {moveZeroes}=require('./index')
describe('moveZeroes', () => {
    it('moves all zeros to the end of the array', () => {
      const nums = [0, 1, 0, 3, 12];
      moveZeroes(nums);
      expect(nums).toEqual([1, 3, 12, 0, 0]);
    });
  
    it('handles an array with no zeros', () => {
      const nums = [1, 2, 3];
      moveZeroes(nums);
      expect(nums).toEqual([1, 2, 3]);
    });
  
     
    it('handles an array with only zeros', () => {
      const nums = [0, 0, 0];
      moveZeroes(nums);
      expect(nums).toEqual([0, 0, 0]);
    });
  });
  