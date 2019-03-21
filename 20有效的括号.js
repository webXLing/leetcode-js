/*
 * @Author: web_XL 
 * @Date: 2019-03-10 17:22:24 
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-03-10 17:43:00
 */
// 20. 有效的括号
var isValid = function (s) {
  let stack = [];
  let obj = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '{' | s[i] == '[') {
      stack.push(s[i])
    } else if (s[i] == ')' || s[i] == '}' | s[i] == ']') {
      if (stack.pop() != obj[s[i]]) {
        return false
      }
    }
  }
  return stack.length == 0
};

console.log(isValid("()"))//false