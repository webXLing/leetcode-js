/*
 * @Author: web_XL 
 * @Date: 2019-05-10 20:59:46 
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-05-10 22:11:01
 */

// 605. 种花问题
// 输入: flowerbed = [1, 0, 0, 0, 1], n = 1
// 输出: True
// 输入: flowerbed = [1, 0, 0, 0, 1], n = 2
// 输出: False
// 1 0 0 0 0  0 0  0 0  1
// 0 1
let canPlaceFlowers = (flowerbed, n) => {

  // parseInt((n - 1) / 2 ) = 可以种几颗  (n为最近两个花 之间的空地数量) 核心
  // 0 0
  // 1 0
  // 2 0
  // 3 1
  // 4 1
  // 5 2
  // 6 2
  // 7 3
  // 8
  let filedBegin = flowerbed[0] > 0 ? true : false;
  let filedEnd = flowerbed[flowerbed.length - 1] > 0 ? true : false;
  if (!filedBegin) {
    flowerbed.unshift(1, 0)
  }
  if (!filedEnd) {
    flowerbed.push(0, 1)
  }
  //上面步骤的原因
  // 遇到这两种情况[0, 0, 1, 0, 0]  或者[0]
  // 按照parseInt((n - 1) / 2)  规则得出的都是零 因为这种算法 是以  两边都是花的情况下的结果
  // 而上面这两种 0的两面 或者有一面 是没有花的 所以手动 给他们加上
  // [0, 0, 1, 0, 0]=> [1, 0, 0, 1, 0, 0, 0, 1]
  // [0]=> [1, 0, 0, 0, 1]
  // 这样就符合我们的规则了



  let size = 0  //最近两个花 之间的空地数量
  let canfiled = 0 //可以种植的数量
  for (let i = 1, len = flowerbed.length; i < len; i++) {
    if (flowerbed[i] > 0) {//
      if (size == 0) continue //说明 处在 1 1 相邻的情况 直接跳过
      let num = parseInt((size - 1) / 2) // 当前间隔最多可以种植的数量
      canfiled += num
      size = 0 //重置间隔数量
    } else {//当前是空地  空地数量+1
      size++
    }
  }
  return canfiled >= n
};

// 最快范例
var canPlaceFlowers = function (flowerbed, n) {
  // 定义一个sum = 0
  // 遍历花坛，找到这样一个位置，此位置空，&& 前后都为空，则sum+1
  // 判断sum与n大小比较
  [0, 1, 0]
  if (!n) return true;
  var sum = 0
  var length = flowerbed.length
  for (var j = 0; j < length; j++) {
    if (!flowerbed[j]) {//当前是 空地
      //对于右侧的限制条件 true 表示可以种植（仅对于左侧来讲）
      var leftVoid = j === 0 || flowerbed[j - 1] === 0
      //对于右侧的限制条件 true 表示可以种植（仅对于右侧来讲）
      var rightVoid = j === length - 1 || flowerbed[j + 1] === 0
      if (leftVoid && rightVoid) {
        // 可以种植
        flowerbed[j] = 1  //直接将改位置 种上花  让后面的判断顺利进行  比较关键
        sum++
        if (sum === n) {  //循环次数  可能少些 因为 sum的最大值是大于等于n 才能满足
          return true
        }
      }
    }
  }

  return false
}
// console.log(canPlaceFlowers([0, 1, 0], 1))
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))
