/*
 * @Author: web_XL
 * @Date: 2019-05-05 21:14:07
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-05-05 22:31:33
 */
// 557. 反转字符串中的单词 III
// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
// 示例 1:

// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc" 
// 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。


// 自己的思路  通过split(' ')将每个单词分开 然后将每个单词翻转后 用join(' ')合并成一个方法
// let reverseWords = (s) => {
//   return s
//     .split(' ')
//     .map(item => {
//       return item
//         .split('')
//         .reverse()
//         .join('')
//     }).join(' ')
// };

let reverseWords = (s) => {
  return s
    .split(/\s/g)
    .map(item => {
      return item
        .split('')
        .reverse()
        .join('')
    }).join(' ')
};

// 最快的范例    
var reverseWords = function (s) {
  // "Let's take LeetCode contest"
  // -> tsetnoc edoCteeL ekat s'teL  直接翻转
  // -> "s'teL ekat edoCteeL tsetnoc" 然后通过' '切割后再翻转 不需要循环
  return s.split('').reverse().join('').split(' ').reverse().join(' ')
}

// 不同的思路
// let reverseWords = (s) => {
//   let str = ''//存出结果
//   let begin = 0//单词开始的位置 
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === ' ') {
//       //当遇到' ' ，将前面的单词进行翻转
//       for (let j = i - 1; j >= begin; j--) {
//         str += s[j]
//       }
//       str += ' ' //增加间隔
//       begin = i + 1  //更新单词开始的位置
//     }

//   }
//   // 将最后一个单词 翻转
//   for (let n = s.length - 1; n >= begin; n--) {
//     str += s[n]
//   }
//   return str
// }

console.log(reverseWords("Let's take LeetCode contest"))

