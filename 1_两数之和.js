/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} number
 */
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 1.正常逻辑
// var twoSum = function(nums,target){
//   for(let i = 0;i<nums.length;i++){
//     for(let j=i+1;j<nums.length;j++){
//       if(nums[i]+nums[j]===target){
//         return [i,j]
//       }
//     }
//   }
// }

// 2. 2遍哈希表
// var twoSum = function(nums, target) {
//   var map = {};
//   for(var i=0,len=nums.length; i<len; i++){
//       map[nums[i]] = i;
//   }
//   for(var i=0,len=nums.length; i<len; i++){
//       var complement = target - nums[i];
//       var temp = map[complement];
//       if(temp !== undefined && temp !== i){
//           return [i,temp];
//       }
//   }
//   return false;
// };

// 3.  一遍哈希表
var twoSum = function (nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map[complement] || map[complement] === 0) {
      return [i, map[complement]]
    }
    map[nums[i]] = i
    console.log(map)
  }
}
console.log(twoSum([2, 7, 11, 15], 9))