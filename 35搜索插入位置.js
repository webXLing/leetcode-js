/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。
// 示例 1:

// 输入: [1,3,5,6], 5
// 输出: 2

// 15.25%  双指针
// var searchInsert = function(nums, target) {
//   let l = 0;
//   let r = nums.length-1;

//   while(nums[l]<target && nums[r] > target){
//     l++;
//     r--;
//   }
//   if(nums[l]>=target){
//     return l
//   }
//   if(nums[r]<target){
//     return r+1
//   }
//   if(nums[r] == target){
//     return r
//   }

// };


//正常思路
// var searchInsert = function(nums, target) {
//   if(target>nums[nums.length-1]) return nums.length
//   for(let i = 0;i<nums.length;i++){
//     if(target<=nums[i]){
//       return i 
//     }
//   }
// };

let searchInsert = function(nums, target) {
  let left = 0 ;
  let right = nums.length-1;
  while(left<=right){
    let middle = ~~((left + right)/2);//~按位取反运算符(二进制取反) ~~可以用来取整
    if(nums[middle] === target){
      return middle
    }else if(nums[middle] < target){
      left = middle + 1;
    }else if(nums[middle] > target){
      right = middle-1;
    }
    console.log(left,right,middle)//0,3  1
  }
  return left 
};
console.log(searchInsert([1,3,5,6],2))