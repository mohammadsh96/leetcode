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

module.exports={twoSum}