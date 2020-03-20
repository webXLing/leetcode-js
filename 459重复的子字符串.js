/*
 * @Author: web_XL
 * @Date: 2019-05-14 20:11:18
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-05-14 20:54:44
 */

// 459. 重复的子字符串
// http://tools.jb51.net/regex/javascript  正则匹配
// 示例 1:

// 输入: "abab"
// 输出: True
// 解释: 可由子字符串 "ab" 重复两次构成。

// 示例 2:

// 输入: "aba"
// 输出: False

// 示例 3:

// 输入: "abcabcabcabc"
// 输出: True
// 解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)

let repeatedSubstringPattern = (s) => {
  let regx = /^([a-z]+)\1+$/
  return regx.test(s)
};
//(x)  捕获括号 它会匹配并且记住x
// /(foo) (bar) \1 \2/.test('foo bar foo bar') true
// \1就代表着 foo  \2 => bar  类似于


// let re = /(\w+)\s(\w+)/;
// let str = "John Smith";
// let newstr = str.replace(re, "$2, $1"); //$1 => 对应着第一个括号匹配到的内容  $2 => 对应着第二个括号匹配到的内容
// console.log(newstr)  //Smith, John


// 最快范例
let repeatedSubstringPattern = function (s) {//abab  abcabc
  const str = s + s;//abababab   bcabcabcab
  // return str.slice(1, str.length - 1)
  return str.slice(1, str.length - 1).includes(s); bababa
};
console.log(repeatedSubstringPattern('abcabc'))