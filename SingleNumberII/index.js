// first 
var singleNumber = function(nums) {
  let ones = 0;
  let twos = 0;
  for (let i = 0; i < nums.length; i++) {
    ones = (ones ^ nums[i]) & ~twos;
    twos = (twos ^ nums[i]) & ~ones;
  }
  return ones| twos
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
    
    return (3 * distinctSum - sum)/2
};
// let nums=[2,2,3,2]
// console.log(singleNumber(nums));
// //third
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
