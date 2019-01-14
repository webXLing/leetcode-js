// 11. 盛最多水的容器
// 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 说明：你不能倾斜容器，且 n 的值至少为 2
// 输入: [1,8,6,2,5,4,8,3,7]
// 输出: 49

/**
 * @param {number[]} height
 * @return {number}
 */

//  常规逻辑
  // var maxArea = function(height) {
  //   let res = 0
  //     for(let i = 0;i < height.length;i++){
  //       for(let j = i + 1 ;j < height.length;j++){
  //         let calc = (height[i]<height[j]?height[i]:height[j])*(j-i)
  //         console.log(i,j)
  //         res = res>calc?res:calc
  //       }
  //     }
  //     return res
  // };
  // 计算次数 n(n-1)/2
  // 时间复杂度 O(n^2)
  // 空间复杂度O (1)  占用一个恒定空间 res



// 双指指针   
//取两个指针  分别放置数组的左右两端 通过比较两个指针所在的数值，小的那个 指正向中心移动
function maxArea (height){
  let res = 0;
  let l = 0;
  let r = height.length-1;

  while(l<r){
    res = Math.max(res,Math.min(height[l],height[r])*(r-l))
    if(height[l]<height[r]){
      l++
    }else{
      r--
    }
  }
  return res
}
// 计算次数 n 
// 时间复杂度 O(n)
// 空间复杂度O (1)  占用一个恒定空间 res
// console.log(maxArea([1,8,6,2,5,4,8,3,7]))