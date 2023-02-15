var twoSum = function (nums, target) {
  const hashmap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in hashmap) {
      return [hashmap[diff], i];
    }
    hashmap[nums[i]] = i;
  }
  return [];
};
console.log(twoSum([2, 7, 11, 15], 18));
 let obj ={2:0 , 7:1, 11: 2 , 15:3}
