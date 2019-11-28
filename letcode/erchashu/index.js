var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

// 前序遍历+递归
var preOrder = function (node) {
  if (node) {
    console.log(node.value)
    preOrder(node.left)
    preOrder(node.right)
  }
}
preOrder(tree)
console.log("---------")

// 中序遍历
var zx = function (node) {
  if (node) {
    zx(node.left)
    console.log(node.value)
    zx(node.right)
  }
}
zx(tree)
console.log("---------")

//后续
var hx = function (node) {
  if (node) {
    hx(node.left)
    hx(node.right)
    console.log(node.value)
  }
}
hx(tree)
console.log("----深度优先-----")

// 深度优先非递归
var preOrderUnRecur = function (node) {
  if (!node) {
    throw new Error('Empty Tree')
  }
  var stack = []
  stack.push(node)
  while (stack.length !== 0) {
    node = stack.pop() // 删除数组的最后一项  返回值是删除掉的那一项 pop是会修改数组的
    console.log(node.value)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
}
preOrderUnRecur(tree)

console.log("----广度优先-----")


// 广度优先非递归

function BreadthFirstUnRecur(biTree) {
  let queue = []
  queue.push(biTree)
  while (queue.length !== 0) {
    let node = queue.shift() //删除前面一项  返回值是删除的哪一项
    console.log(node.value)
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
  }

}
BreadthFirstUnRecur(tree)