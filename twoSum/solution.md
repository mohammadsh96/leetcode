## Solutions :

 
### One pass approach 

- time complexity : O(N)

```js
var twoSum = function(nums, target) {

    let hashMap={}

    for(let i=0;i<nums.length ;i++){

        let completment =target-nums[i]

           if(completment in hashMap){

            return [ hashMap[completment],i]

               }

            hashMap[nums[i]]=i

            }
    };
```
### Two pass approach 

- time complexity : O(2N) ==> O(N)

```js
var twoSum = function(nums, target) {
    let hashMap={}
       for(let i=0;i<nums.length ;i++){

        hashMap[nums[i]]=i
           }

       for(let i=0;i<nums.length ;i++){

          let completment =target-nums[i]

            if(hashMap[completment] && hashMap[completment] !=i){

            return [i , hashMap[completment]]

            }

          }
    };
```


### BRUTE FORCE approach

- time complexity : O(N^2)

```js
var twoSum = function(nums, target) {
         
       for(let i=0;i<nums.length ;i++){
         
          for(let j=i+1;j<nums.length ;j++){
          
              if(nums[i]+nums[j]==target){

              return [i , j]

              }
            }
          }
          return null
};
```



Here's the unit test code for the `twoSum` function:  [test file here](./twoSum.test.js)