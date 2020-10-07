// 语法
// Object.keys(obj)
// 参数
// obj
// 要返回其枚举自身属性的对象。
// 返回值
// 一个表示给定对象的所有可枚举属性的字符串数组。
 
//  Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，
//  数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。
 

// 用于获取对象自身所有的属性
 var obj = {
  id: 1,
  pname: '小米',
  price: 1999,
  num: 2000
};
var arr = Object.keys(obj);
console.log(arr); //[ 'id', 'pname', 'price', 'num' ]
// arr.forEach(function(value) {
//   console.log(value);

// })