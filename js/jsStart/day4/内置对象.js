// 1.内置对象
// js中对象分为3种：自定义对象、内置对象、浏览器对象
// 前面两种对象是js基础内容，属于es；第三个浏览器对象属于我们js独有的
// 内置对象就是指js语言自带的一些对象，这些对象供开发者使用，并提供一些属性和方法
// 内置对象最大的优点就是帮助我们快速开发
// js提供了多个内置对象：Math、Date、Array、String等



// 2.查文档
// MDN/W3C
//https://developer.mozilla.org/zh-CN/



// 3.Math对象
// Math对象不是构造函数，它具有 数学常数和函数的属性和方法。
// 跟数学相关的运算（求绝对值，取整、最大值等）可以使用Math中的成员
// Math.PI //圆周率
// Math.floor() //向下取整
// Math.ceil() //向上取整
// Math.round() 四舍五入 就近取整
// Math.abs() // 绝对值
// Math.max() /Math.min() //求最大最小值
// Math.random() 函数返回一个浮点，伪随机数在范围[0,1) 不包括1

console.log(Math.floor(4.5)) //4
console.log(Math.ceil(4.3)) //5
console.log(Math.round(3.8)) //4

console.log(Math.random()*3+2)


// 得到一个两数之间的随机数
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
// 得到一个两数之间的随机整数，包括两个数在内
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}

var arr = ['王一博','王俊凯','王源'];
console.log(arr[getRandomIntInclusive(0,arr.length - 1)]);


// Date() 日期对象  是一个构造函数  必须使用new 来调用创建我们的日期对象
var arr = new Array();//创建一个数组对象
var obj = new Object();//创建了一个对象实例
// 1.使用Date
var date = new Date();
console.log(date)//2020-10-02T11:45:12.778Z

// Date对象和Math对象不一样，他是一个构造函数，所以我们需要实例化后才能使用
var date1 = new Date();
console.log(date1.getFullYear()) //返回当前日期的年
console.log(date1.getMonth())//返回月份少一个月 （0-11）
console.log(date1.getDate())//返回 几号
console.log(date1.getDay())//星期中的第几天（0-6）
// 2020
// 9
// 2
// 5

// 格式化 时分秒
var date2 = new Date();
console.log(date2.getHours());
console.log(date2.getMinutes());
console.log(date2.getSeconds());
// 要求封装一个函数返回当前的时分秒格式
function getTime () {
  var time = new Date();
  var h = time.getHours();
  // 如果秒小于0  比如20:30:1 解决
  h = h < 10 ? '0' + h : h;
  var m = time.getMinutes();
  m = m < 10 ? '0' + m : m;
  var s = time.getSeconds();
  s = s < 10 ? '0' + s : s;
  return h + ':' + m + ':' + s;
}
console.log(getTime()) //20:28:54
var h1 = 6
h1 = h1 < 10 ? '*' + h1 : h1;
console.log(h1)