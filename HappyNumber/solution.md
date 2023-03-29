## Solutions

```js
var isHappy = function(n) {
    // Create a new Set to keep track of seen numbers
   const prevSeenSum= new Set()
   // Continue looping until we reach 1 
    while(n != 1 ){
      let currentSum=0;
       while(n > 0 ){
         // Compute the sum of squares of current number's digits
            currentSum += (n %10) * (n %10)
             // Break down each digit of number 
             n =Math.floor(n /10 )
           }
           
             if(!prevSeenSum.has(currentSum)){
                // Add current number to seen set
              prevSeenSum.add(currentSum)
               n = currentSum
              }else{
                     return false
               }


        }
    return true
};
```
Here's the unit test code for the `isHappy` function:  [test file here](./happyNumber.test.js)
