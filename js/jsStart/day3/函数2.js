// 翻转数组
function reverse(arr) {
  var nArr = [];
  for(var i = arr.length -1; i>= 0;i--) {
    nArr[nArr.length] = arr[i];
  }
  return nArr;
}
var arr1 = reverse([1,3,4,6,9])
console.log(arr1) //[ 9, 6, 4, 3, 1 ]



// 函数可以调用另外一个函数
function fn1() {
  console.log(11);
  fn2();
}

function fn2() {
  console.log(22)
}

fn1();
// 11
// 22


// 函数声明的两种方式
// 1.利用函数关键字自定义函数(命名函数)
function f() {

}
f();
//2.函数表达式（匿名函数）
//var 变量名 = function () {}
var fun = function(aru) {
  console.log('我是函数表达式');
  console.log(aru)
}
fun('pink'); 
//我是函数表达式
//pink
// (1)fun是变量名 不是函数名
// (2)函数表达式声明方式跟变量声明差不多,只不过变量里面存的是值而函数表达式里面存的是函数
