const {containsNearbyDuplicate}=require('./index')
describe("containsNearbyDuplicate", () => {
    test("returns true when there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k", () => {
      expect(containsNearbyDuplicate([1,2,3,1], 3)).toBeTruthy();
      expect(containsNearbyDuplicate([1,0,1,1], 1)).toBeTruthy();
    });
  
    test("returns false when there are no two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k", () => {
      expect(containsNearbyDuplicate([1,2,3,1,2,3], 2)).toBeFalsy();
    });
  });