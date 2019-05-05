// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let letborder = -Math.pow(2,31);
  let rigborder = Math.pow(2,31)-1;
  console.log(letborder,rigborder)
  if(x<letborder||x>rigborder){return 0}
  let str = x.toString();
  let arr = str.split('');
  let start = ''
  if(arr[0]==='-'){
    start = arr[0];
    arr.shift()
  }
  arr.reverse();
  let res = Number(start+arr.join(''))
  if(res<letborder||res>rigborder){return 0}
  return res
};

var reverse1 = function(x) {
  let res = parseInt(x.toString().split('').reverse().join(''))
  if(res<-Math.pow(2,31)|| res > Math.pow(2,31)){return 0}
  return x>0?res:-res
};