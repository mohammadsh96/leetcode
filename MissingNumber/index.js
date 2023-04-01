var missingNumber = function(nums) {
    const n = nums.length;
    let sum = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((acc, curr) => acc + curr, 0);
    return sum - actualSum;
  };

var missingNumber = function missingNumber(nums) {
    let hash = {};
    let max = 0;
    let min = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
      if (max < nums[i]) {
        max = nums[i];
      }
      if (nums[i] < min) {
        min = nums[i];
      }
      hash[nums[i]] = true;
    }
  
    for (let j = 0; j < max; j++) {
      if (!hash[j]) {
        return j;
      }
    }
    
    return max + 1;
  };

  module.exports={missingNumber}
