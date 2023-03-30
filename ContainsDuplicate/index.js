//using hash obj
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
// using Set()
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
module.exports={containsDuplicate}