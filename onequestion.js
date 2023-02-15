Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums



var runningSum = function(nums) {
       result = [];
  start_length = 0;
  for (let i = 0; i < nums.length; i++) {
    let equl_loop = nums[i];
    start_length += equl_loop;
    result.push(start_length);
  }
  return result;
    
};
