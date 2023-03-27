// Two pass approach 
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


//One pass approach
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

// BRUTE FORCE approach

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

