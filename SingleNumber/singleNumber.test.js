const {singleNumber}=require('./index')
describe('singleNumber', () => {
    test('returns the correct single non-duplicate element in the array', () => {
      const nums1 = [2, 2, 1];
      const nums2 = [4, 1, 2, 1, 2];
      const nums3 = [1];
      const nums4 = [0, 0, 1, 2, 2];
      const nums5 = [9, 3, 9, 3, 7];
      const nums6 = [-1, -1, -2];
      
      expect(singleNumber(nums1)).toBe(1);
      expect(singleNumber(nums2)).toBe(4);
      expect(singleNumber(nums3)).toBe(1);
      expect(singleNumber(nums4)).toBe(1);
      expect(singleNumber(nums5)).toBe(7);
      expect(singleNumber(nums6)).toBe(-2);
    });
  
    
  });
  