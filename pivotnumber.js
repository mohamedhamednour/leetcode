var pivotIndex = function(nums) {
    let totalSum = nums.reduce((pre , nex) => pre+ nex)
   
 
   let pre = 0 
   for (let i = 0; i < nums.length; i++) {
    let  next =  totalSum - nums[i] - pre

    if (next ==  pre) {
        return i
        
    }
    pre+=nums[i]
    
   } 
   return -1
};



// var pivotIndex = function(nums) {
//     let rightSum = 0;
//     let leftSum = 0;
//     let sum = 0;
//     for(let i = 0; i < nums.length; i++)
//     {
 
//         // you dont count the pivot index 
//         leftSum += nums[i];
//         rightSum = 0;
//         for(let j = i + 1; j < nums.length; j++)
//         {
            
//             rightSum += nums[j]
//         }
       
//         if(leftSum - nums[i] == rightSum)
//         {
//             return i;
//         }
//         //consider every number as the pivot index 
        
//     }

//     return -1;
    
// };