const {missingNumber}=require('./index')
describe('missingNumber', () => {
    test('returns 2 for [0, 1, 3]', () => {
      expect(missingNumber([0, 1, 3])).toBe(2);
    });
  
    test('returns 8 for [0, 1, 2, 3, 4, 5, 6, 7]', () => {
      expect(missingNumber([0, 1, 2, 3, 4, 5, 6, 7])).toBe(8);
    });
  
    test('returns 0 for [1, 2, 3]', () => {
      expect(missingNumber([1, 2, 3])).toBe(0);
    });
  
    test('returns 1 for [0]', () => {
      expect(missingNumber([0])).toBe(1);
    });
  
    test('returns 0 for [1]', () => {
      expect(missingNumber([1])).toBe(0);
    });
  
    });