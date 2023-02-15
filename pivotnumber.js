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

console.log(pivotIndex([1,7,3,6,5,6]))







// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var pivotIndex = function(nums) {
//     let res = []
//     let sum = 0
   
//     for (let i = 0; i < nums.length; i++){
//         sum = nums[i]   + sum
//         res.push(sum)
//     }

//     let total = res[nums.length-1]
 


   
//     for (let i = 0; i < nums.length ; i++){
//         let lSum = res[i] - nums[i]
//         let rSum = total - res[i]

//         console.log(i)
    
//         if (lSum === rSum ) {
//             return i 
//         } 
        
//     }
//     return -1
    
// };