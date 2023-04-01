## Solutions :
---- 
```js
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};
```
- **The time complexity** of the given code is **O(n)**, where n is the length of the input array digits. This is because the code uses a single loop to iterate over all the elements in the input array, each taking O(1) time complexity.



- The **space complexity** of the given code is also **O(n)**, where n is the length of the input array digits. This is because the code modifies the input array in place without creating any new data structures, so the space used by the code is proportional to the size of the input array.

## result on Leetcode : 
   ![plusOne](../assets/plusOne1.png)

-------- 
### same approach but faster on leetcode test :


```js
var plusOne = function(digits) {
    let n = digits.length;
    if (digits[n-1] === 9) {
        digits[n-1] = 0;
        let carry = 1;
        for (let i = n-2; i >= 0; i--) {
            let sum = digits[i] + carry;
            digits[i] = sum % 10;
            carry = Math.floor(sum / 10);
            if (carry === 0) break;
        }
        if (carry === 1) digits.unshift(1);
    } else {
        digits[n-1] += 1;
    }
    return digits;
};

```
- The **time complexity** of this solution is **O(n)**, where n is the length of the input array digits. This is because the algorithm goes through the array twice, and each iteration takes linear time.

- The **space complexity** of this solution is **O(1)**, as the amount of extra space used does not depend on the input size, but on the constant size of the output array (which is at most one element larger than the input array). Therefore, this algorithm uses a constant amount of extra space regardless of the input size.
## result on Leetcode : 
   ![plusOne](../assets/onePlusFaster.png)
   
Here's the unit test code for the `plusOne` function:  [test file here](./plusOne.test.js)
