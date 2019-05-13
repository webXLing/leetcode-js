/*
 * @Author: web_XL 
 * @Date: 2019-05-13 20:04:34 
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-05-13 22:01:24
 */
// 89. 格雷编码
// 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。
// 第一个数与最后一位数 也只差以为一位数 ‘首尾相连’ 所以又称为循环码或反射码
// n = 1
// 0
// 1

// n = 2
// 00
// 01
// --
//   11
// 10

// n = 3
// 000
// 001
// 011
// 010
// ---
// 110
// 111
// 101
// 100

// let num = 100;
// NumberObject.toString(radix); Number -> String
// console.log(num.toString(2));//返回一个字符串 radix默认10 按照十进制解析

// parseInt(string, radix)  String -> Number
// console.log(parseInt('11', 2));//返回一个数字 radix默认10 按照十进制解析 如果字符串的第一个字符不能转为数字 将返回NaN
let make = (n) => {
  if (n === 1) {
    return ['0', '1']
  } else {
    let pre = make(n - 1)//获取上次的格雷编码
    let result = [] //存放结果
    let max = Math.pow(2, n) - 1//当前n个最后一位的索引
    for (let i = 0, len = pre.length; i < len; i++) {
      result[i] = `0${pre[i]}`
      result[max - i] = `1${pre[i]}`
    }
    return result
  }
}
// console.log(make(0))
// console.log(make(1))
// console.log(make(2))
// console.log(make(3))



let grayCode = (n) => {
  if (n === 0) return [0]

  let arr = make(n)
  return arr.map(item => {
    return parseInt(item, 2)  //parseInt(item,10)默认以十进制来换算
  })

};

// console.log(grayCode(0))
// console.log(grayCode(1))



// 最快范例
var grayCode = function (n) {//n=2
  if (n === 0) return [0]

  const nums = ['0', '1']
  const arr_splice = Array.prototype.splice
  for (let t = 2; t <= n; t++) {
    let args = nums.slice().reverse()//['1','0']
    args.forEach((s, i) => args[i] = '1' + s)//['11','10']
    args.unshift(0)//['0',11','10']
    args.unshift(nums.length)//['2','0',11','10']
    console.log(args)
    nums.forEach((s, i) => nums[i] = '0' + s)// ['00', '01']
    arr_splice.apply(nums, args)// nums=> [ '00', '01', '11', '10' ]
  }
  return nums.map(binary => parseInt(binary, 2))
};
console.log(grayCode(2))
console.log(grayCode(3))