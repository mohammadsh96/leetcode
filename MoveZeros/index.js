var moveZeroes = function(nums) {
  let i = 0; // next available index for non-zero elements
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) { // found a non-zero element
      nums[i] = nums[j]; // move it to the next available index
      i++;
     
    }
  }
  for (let j = i; j < nums.length; j++) {
    nums[j] = 0; // fill the rest of the array with zeros
  }
};

module.exports ={moveZeroes}
