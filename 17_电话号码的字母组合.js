/*
 * @Author: web_XL 
 * @Date: 2019-05-06 21:38:14 
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-05-06 22:58:21
 */
// 17. 电话号码的字母组合
// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

let letterCombinations = (digits) => {
  if (digits.length == 0) return [] //为空 情况
  let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let arr = digits.split('')
  let resarr = arr.map(item => map[item])
  if (resarr.length == 1) return resarr[0].split('')//仅输入一个 情况

  let compute = (arr) => {//组合传入数组的前两项  ['ab','cd','ewe']
    // console.log(arr)
    // if(arr.length==1)return arr
    let temp = []         //['ac','ad','bc','bd']
    // 将前两项组合结果放入临时数组中  
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    // [['ac','ad','bc','bd'],'ewe']
    arr.splice(0, 2, temp)//将原来的数组前两项结果用临时数组替换
    if (arr.length > 1) {
      compute(arr)
    }
    return arr[0]
  }
  return compute(resarr)
};
console.log(letterCombinations('2'))




