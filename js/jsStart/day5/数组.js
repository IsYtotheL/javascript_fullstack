// 5.1 数组对象的创建
// 创建数组对象的两种方式
// 利用数组字面量方式
var arr = [1,2,3];
console.log(arr[0]); //1
// 2.利用new Array()
//var arr1 = new Array(); //创建了一个空的数组
var arr1 = new Array(2); //这个二表示数组的长度为2  里面有2个空的数组元素
var arr2 = new Array(2,3);//等价于[2,3] 这样写表示 里面有两个数组元素 是 2 和3
console.log(arr1) //[ <2 empty items> ]
console.log(arr2) //[ 2, 3 ]



// 5.2 检测是否为数组
// （1）instanceof 运算符 他可以用来检测是否为数组
var arr3 = [];
var obj = {};
console.log(arr3 instanceof Array); //true
console.log(obj instanceof Array);//false

// (2)Array.isArray(参数) H5新增的方法  ie9以上版本支持
console.log(Array.isArray(arr)); //true
console.log(Array.isArray(obj)); //false



