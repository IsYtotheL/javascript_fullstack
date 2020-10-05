// 1.翻转数组
var arr = ['pink','red','green'];
arr.reverse();
console.log(arr); //[ 'green', 'red', 'pink' ]

// 2.数组排序(冒泡排序)
// 排序结果错乱 元素会按照转换为的字符串的诸个字符的Unicode位点进行排序
var arr1 = [13,4,77,1,7];
arr1.sort();
console.log(arr1); //[ 1, 13, 4, 7, 77 ]
arr1.sort(function(a,b) {
  return a-b;//升序的顺序排列
  // return b-a;//降序的顺序排列
})
console.log('hou'+arr1) //[ 1, 4, 7, 13, 77 ]