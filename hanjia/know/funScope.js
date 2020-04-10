var a = 2;
function foo () {
  var a = 3;
  console.log(a); //3
} // 这一行
foo (); // 以及这一行   
console.log(a); //2


console.log('-----------')
// 避免污染作用域和解决显示通过此函数名调用才能运行
var a =2;
(function foo() { // 添加这一行
  var a = 3;
  console.log(a); // 3
})(); // 以及这一行
console.log(a);//2