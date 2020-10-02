//函数就是封装了一段可被重复调用执行的代码块。通过此代码块可以实现大量代码的重复使用
// 函数使用：
// 1.声明函数
// function 函数名() {
//   //函数体
// }
// 2.调用函数
// 函数名();
// 注意：声明函数本身并不会执行代码，只有调用函数时才会执行函数体代码


// eg1.
function getSum() {
  var sum = 0;
  for(var i = 1;i<=100;i++) {
    sum+=i;
  }
  console.log(sum); //5050
}
getSum();


// 3.函数的封装
// 函数的封装是把一个或者多个功能通过函数的方式封装起来，对外只提供一个简单的函数接口


// 3.1 形参和实参
// 形参：形式上的参数 函数定义的时候 传递的参数 当时并不知道是什么
// 实参：实际上的参数 函数调用的时候传递的参数 实参是传递给形参的

function gSum(num1,num2) {
  console.log(num1+num2); 
}
gSum(2,3) //5




// 函数的返回值格式
  // function 函数名() {
  //   return 需要返回的结果;
  // }
  // 函数名();
  // (1)我们的函数只是实现某种功能，最终结果需要返回给函数的调用着函数名()通过return 实现的
  //（2）只要函数遇到return 就把后面的结果 返回给函数的调用者 函数名() = return 后面的结果
  // 3.代码验证
  function yz() {
    return 666;
  }
  yz(); //没有结果
  console.log(yz()); //666


function cook(aru) {
  return aru;
}
console.log(cook('cake')) //cake

function gets(num3,num4) {
  return num3 + num4;
}
console.log(gets(2,3)) //5

function getMax(num5,num6) {
  if(num5 > num6) {
    return num5;
  } else{
    return num6;
  }
}
console.log(getMax(8,9)) //9


// 函数返回值注意事项
// 1.return 终止函数
function getT(num7,num8) {
  return num7 + num8;
  console.log(123); //retutn 后面的代码不会被执行
}
console.log(getT(5,6)) //11

//2.return 只能返回一个值
function fn(n1,n2) {
  return n1,n2;//返回的结果是最后一个值
}
console.log(fn(1,2))//2


// 3.我们求任意两个数的  加减乘除结果
function getResult(n3,n4) {
  return [n3+n4,n3-n4,n3*n4,n3/n4]
}
console.log(getResult(1,2))//[ 3, -1, 2, 0.5 ]

// 4.我们函数如果有 return 则返回的是return 后面的值，
// 如果函数没有return 则返回undefined
function fun1() {
  return 666; 
}
console.log(fun1());//666
function fun2() {

}
console.log(fun2()) //undefined
