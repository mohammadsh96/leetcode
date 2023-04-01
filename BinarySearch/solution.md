## Solution : 
```js
var search = function (nums, target) {
  let min = 0;
  let max = nums.length - 1;
  if (nums[min] == target) return min;
  if (nums[max] == target) return max;
  while (min < max) {
    let mid = Math.floor(min + (max - min) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      //go right
      min = ++mid;
    } else {
      max = --mid;
    }
  }
  return -1;
};
```

----

- The **time complexity** of this algorithm is **O(log n)**, where n is the length of the input array nums. This is because the algorithm uses binary search to find the target element, which has a logarithmic time complexity.

- The **space complexity** of the algorithm is **O(1)**, because it uses only a few constant-sized variables to keep track of the indices and values being searched.

----


## result on Leetcode : 
![binary search](../assets/binarySearch.png)

## Unit test file : [click here](binarySearch.test.js)

