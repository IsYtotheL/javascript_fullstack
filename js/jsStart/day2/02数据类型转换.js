// 转换为字符串类型
// 转换为数字型
// 转化为布尔型


// 1.1 字符串
  // toString() 转成字符串
  // String()强制转换  转成字符串
  // 加号拼接字符串   和字符串拼接的都是字符串

  // ---- 变量.toString
  var num = 10;
  var num2 = 12;
  var str = toString(num)
  console.log(typeof(str)) //string
  console.log(num2.toString()) //2
  console.log(typeof(num2.toString())) //string
// ----  String(变量)
var num1 = 11;
console.log(String(num1)) //11
console.log(typeof(String(num1))) //string
// ---  利用 + 拼接字符串    隐式转换
var num3 = 15;
str3 = num3 + '3'
console.log(typeof(str3))//string


// 1.2转换为数字型
// parseInt(string)函数
// parseFloat(string)函数
// Number 强制转换函数 
// js 隐式转换 (-*/)   利用算术运算符
// --- parseInt 得到的是整数
var str11 = '12.3'
num11 = parseInt(str11)
console.log(typeof(num11) + num11) //number12
// --- parseFloat得到的是小数  浮点数
num12 = parseFloat(str11)
console.log(typeof(num12) + num12)  //number12.3
//  --- Number
var str13 = '123'
console.log(typeof(Number(str13))) //number
// --- * - /
console.log(typeof '12') //string
console.log(typeof ('12' -3 )) //number
console.log(typeof('12' *'3')) //number
console.log(typeof('12' + 3)) //string



