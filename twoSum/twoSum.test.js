const {twoSum}=require('./index')


describe('twoSum', () => {
    it('should return the correct indexes of two values that add up to the target number', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const result = twoSum(nums, target);
      expect(result).toEqual([0, 1]);
    });
  
    it('should handle negative numbers and zero correctly', () => {
      const nums = [-5, 0, 5];
      const target = 0;
      const result = twoSum(nums, target);
      expect(result).toEqual([0, 2]);
    });
  
    it('should handle edge cases correctly (empty array or target cannot be achieved)', () => {
      const nums = [1, 2, 3];
      const target = 7;
      const result = twoSum(nums, target);
      expect(result).toBeFalsy();
      
      const emptyNums = [];
      const emptyTarget = 10;
      const emptyResult = twoSum(emptyNums, emptyTarget);
      expect(emptyResult).toBeFalsy();
    });
  });