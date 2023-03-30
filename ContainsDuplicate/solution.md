## Solutions : 

### 1- using has object approach
```js
var containsDuplicate = function(nums) {
  let hash ={}
  for(let i=0; i<nums.length ;i++){
    if(!hash[nums[i]]){
        hash[nums[i]]=1
    }else{
        hash[nums[i]]+=1
    }
    if(hash[nums[i]]==2)return true
  }
  return false
  
};
```
## result on Leetcode : 
![containsDuplicate](../assets/containsDuplicate.png)



### 2- using Set()  approach

```js
var containsDuplicate = function(nums) {
  let set = new Set();
  for(let i=0; i<nums.length ;i++){
      if(set.has(nums[i])){
      return true;
    } else {
      set.add(nums[i]);
    }
  }
  return false;
};
```
## result on Leetcode : 
![containsDuplicate](../assets/containsDuplicateSet().png)
## Unit test file : [click here](containsDuplicate.test.js)