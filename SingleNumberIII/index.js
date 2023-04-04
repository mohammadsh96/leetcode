//first solution 
var singleNumber = function (nums) {
  let hash = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]] += 1;
    }
  }

  for (const key in hash) {
    if (hash[key] == 1) {
      result.push(parseInt(key));
    }
  }
  return result;
};
//second solution
var singleNumber = function (nums) {
  let obj = {};
  for (let i of nums) {
    if (obj[i] !== undefined) {
      delete obj[i];
    } else {
      obj[i] = i;
    }
  }
  return Object.values(obj);
};
var singleNumber = function (nums) {
let xorResult = 0;
  for (let i of nums) {
    xorResult ^= i;
  }
  
  // Find the rightmost set bit in the XOR result
  let rightmostSetBit = 0;
  while ((xorResult & (1 << rightmostSetBit)) === 0) {
    rightmostSetBit++;
  }
  
  let num1 = 0;
  let num2 = 0;
  
  // XOR all the numbers with the rightmost set bit
  for (let i of nums) {
    if ((i & (1 << rightmostSetBit)) === 0) {
      num1 ^= i;
    } else {
      num2 ^= i;
    }
  }
  
  return [num1, num2];
};

let nums = [1, 1, 2, 2, 3, 4];
console.log(singleNumber(nums));
module.exports = { singleNumber };


