
var containsNearbyDuplicate = function(nums, k) {
    const n = nums.length;
  for (let i = 0; i < n; i++) {
      for (let j = i+1; j < Math.min(i+k+1, n); j++) {
          if (nums[i] === nums[j]) {
            if (Math.abs(i - j) <= k) {
              return true;
            }
              
          }
      }
  }
  return false;
};
var containsNearbyDuplicate = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
          return true;
      }
      map.set(nums[i], i);
  }

  return false;
};


module.exports = { containsNearbyDuplicate };
