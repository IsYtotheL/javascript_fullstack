//1
// console.log(num) //ReferenceError: num is not defined
//2
// console.log(num) //undefined
// var num = 10; 
// 3
// fn ();
// function fn() {
//   console.log(11) //11
// }
//4
//fun(); //TypeError: fun is not a function
// var fun = function() {
//   console.log(22) 
// }
// //5
// fun()//22

// 1.我们js引擎运行js分为两步:预解析  代码执行
// a.预解析 js引擎会把js里面所有的 var 还有 function 提升到当前作用域的最前面
// b.代码执行  按照代码书写的顺序从上往下执行
// 2.预解析分为 变量预解析(变量提升) 和函数预解析(函数提升)
// (1)变量提升 就是把所有的变量声明提升到当前作用域最前面  不提升赋值操作
// (2)函数提升 就是把所有的函数声明提升到当前作用域的最前面  不调用函数

// var num = 10;
// fun();
// function fun() {
//   console.log(num);
//   var num = 20;
// }
// 相当于执行了以下操作
// var num;
// function fun () {
   // var num;
//   console.log(num); //underfined
// num = 20;
// }
// num = 10;
// fun();

// console.log(num1) //undefined
// var num1 = 10; 



// 2.
// var a = 18;
// f1();
// function f1() {
//   var b = 9;
//   console.log(a); //undefined
//   console.log(b);//9
//   var a = '123'
// }
// 相当于
// var a;
// function f1() {
//   var b;
//   var a;
//   b = 9;
//   console.log(a);
//   console.log(b);
//   a = '123';
// }
// a = 18;
// f1();


//4
// f1();
// console.log(c);
// console.log(b);
// console.log(a);
// function f1 () {
//   var a = b = c = 9;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// 以下代码
function f1 () {
  var a;
 a = b = c = 9;
  // 相当于 var a = 9;b = 9; c = 9; b和c直接赋值  没有var 声明  当全局变量看
  // 集体声明 var a = 9,b=9,c=9;
  console.log(a); //9
  console.log(b); //9
  console.log(c); //9
}
f1();
  // console.log(a); // not defined
  console.log(b); //9
  console.log(c); //9
