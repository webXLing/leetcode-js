/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let str1 = reverse(print(l1))
  let str2 = reverse(print(l2))
  console.log('str1,str2', str1, str2);

  let res = parseFloat(str1) + parseFloat(str2)
  res = reverse(res)
  console.log('resdas', res);

  let resNode = null
  let curNode = null

  let arr = []
  for (let index = 0; index < res.length; index++) {
    let node = new ListNode()
    node.val = res[index]
    node.next = null


    if (index == 0) {
      resNode = node
    } else {
      curNode.next = node
    }
    curNode = node
  }

  return resNode
};



function ListNode (val) {
  this.val = val;
  this.next = null;
}

let node1 = new ListNode(0)
// let node2 = new ListNode(4)
// let node3 = new ListNode(3)

let node4 = new ListNode(0)
// let node5 = new ListNode(6)
// let node6 = new ListNode(4)
// node1.next = node2
// node2.next = node3

// node4.next = node5
// node5.next = node6

let res = addTwoNumbers(node1, node4)
console.log('print node', print(res));


function print (node) {
  if (node.next) {
    return '' + node.val + print(node.next)
  } else {
    return node.val
  }
}

function reverse (params) {
  console.log('params', params);
  params = "" + params
  return params.split("").reverse().join("")
}
console.log('print(node1)', print(node1));

