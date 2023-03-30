const {containsDuplicate}=require('./index')
describe("containsDuplicate", () => {
    it("returns true if array contains at least one duplicate element", () => {
      const input = [1, 2, 3, 1];
      const result = containsDuplicate(input);
      expect(result).toEqual(true);
    });
  
    it("returns false if array contains no duplicate elements", () => {
      const input = [1, 2, 3, 4];
      const result = containsDuplicate(input);
      expect(result).toEqual(false);
    });
  
    it("returns true if array contains multiple duplicate elements", () => {
      const input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];   const result = containsDuplicate(input);
      expect(result).toEqual(true);
    });
  });