
const {isHappy} = require('./index')
describe("isHappy()", () => {
    it("should return true for happy numbers", () => {
      expect(isHappy(19)).toBe(true);
      expect(isHappy(7)).toBe(true);
      expect(isHappy(1111111)).toBe(true);
    });
  
    it("should return false for unhappy numbers", () => {
      expect(isHappy(2)).toBe(false);
      expect(isHappy(3)).toBe(false);
      expect(isHappy(89)).toBe(false);
    });
  
    it("should handle edge cases", () => {
      expect(isHappy(0)).toBe(false);
      expect(isHappy(-1)).toBe(false);
      expect(isHappy(2147483647)).toBe(false);
    });
  });