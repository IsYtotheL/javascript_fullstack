// 添加删除数组元素方法
// 1.push() 在我们数组的末尾 添加一个或者多个数组元素  push 推
var arr = [1,2,3];
arr.push(4,'wyb');
console.log(arr); //[ 1, 2, 3, 4, 'wyb' ]
console.log(arr.push('ryl')); //6  数组长度
// (1)push是可以给数组追加新的元素
// (2)push() 参数直接写数组元素就可以了
// (3)push完毕之后，返回的结果是 新数组的长度
// (4)原数组也会发生变化
// 2.unshift 在我们数组的开头 添加一个或多个数组元素
arr.unshift('red','pink');
console.log(arr) //[ 'red', 'pink', 1, 2, 3, 4, 'wyb', 'ryl' ]
console.log(arr.unshift(1)) //9 数组长度
// (1)unshift是可以给数组前面追加新的元素
// (2)unshift() 参数直接写 数组元素就可以了
// (3)unshift完毕之后，返回的结果是 新数组的长度
// (4)原数组也会发生变化


// 3.pop()它可以删除数组的最后一个元素
console.log(arr.pop()); //ryl 
console.log(arr) //[ 1, 'red', 'pink', 1, 2, 3, 4, 'wyb' ]
// (1)pop是可以删除数组的最后一个元素  记住一次只能删除一个元素
// (2)pop()没有参数
// (3)pop完毕之后，返回的结果是 删除的那个元素
// (4)原数组也会发生变化
// 4.shift()它可以删除数组的第一个元素
console.log(arr.shift()); //1
console.log(arr) //[ 'red', 'pink', 1, 2, 3, 4, 'wyb' ]
// (1)pop是可以删除数组的第一个元素  记住一次只能删除一个元素
// (2)pop()没有参数
// (3)pop完毕之后，返回的结果是 删除的那个元素
// (4)原数组也会发生变化