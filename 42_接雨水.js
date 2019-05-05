var trap = function (height) {
  循环数组
  let left = 0, right = 1, res, i
  // 边界的两个数 一定是这个范围里面 最大的数和第二大的数  然后进行计算
  while (i < height.length) {
    if (i > 1) {
      if (height[i] < height[right]) {//在最大值和
        res += (right - left) * (height[left] >= height[right] ? height[right] : height[left])
      } else {
        res += (right - left) * (height[left] >= height[right] ? height[right] : height[left])
      }
      i++
    }
  }
  // for (let i = 0; i < height.length; i++) {
  //   if (i > 1) {
  //     if (height[left] > height[i] && height[i] < height[right]) {//在最大值和

  //     }else{
  //       res += (right-left)*(height[left]>height[right]?)
  //     }
  //   }
  // }
};

//
这是我
