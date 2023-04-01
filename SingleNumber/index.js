// first 
var singleNumber = function(nums) {
    let result = 0;
    
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    
    return result;
};
//second
var singleNumber = function(nums) {
    let sum = 0;
    let distinctSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    
    let distinctNums = [...new Set(nums)];
    
    for (let i = 0; i < distinctNums.length; i++) {
        distinctSum += distinctNums[i];
    }
    
    return 2 * distinctSum - sum;
};
//third
var singleNumber = function (nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]] += 1;
    }
  }

  for (const key in hash) {
    if (hash[key] == 1) {
      return key;
    }
  }
};
module.exports = { singleNumber };
