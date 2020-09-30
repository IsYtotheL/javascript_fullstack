// for循环  循环体  终止条件  循环语句
for(var i = 0;i <=5; i++) {
  console.log(i) //0 1 2 3 4 5
}
console.log(i) //6


// for(初始化变量;条件表达式;操作表达式) {
//   //循环体
// }

var sum = 0;
for (i = 1;i<5;i++) {
  sum+=i
}
console.log(sum)//10

var str = '';
for(var i =1;i<=4;i++) {
  str = str + '*'
}
console.log(str) //****


//双重for循环
for(var m = 1;m <=3;m++) {
  console.log('这是外层循环第' + m + '次');
  for(var j = 1;j<=3;j++) {
    console.log('这里是里层循环第' + j + '次');
  }
}
// 这是外层循环第1次
// 这里是里层循环第1次
// 这里是里层循环第2次
// 这里是里层循环第3次
// 这是外层循环第2次
// 这里是里层循环第1次
// 这里是里层循环第2次
// 这里是里层循环第3次
// 这是外层循环第3次
// 这里是里层循环第1次
// 这里是里层循环第2次
// 这里是里层循环第3次


var str2 = ''
for(var n=1;n<=10;n++) {//外层循环控制行数
  for(var k = n;k<=10;k++) { //里层循环打印个数不一样
    str2=str2 + '$';
  }
str2 += '\n';
}
console.log(str2)

// $$$$$$$$$$
// $$$$$$$$$
// $$$$$$$$
// $$$$$$$
// $$$$$$
// $$$$$
// $$$$
// $$$
// $$
// $
var str99=''
for(var r = 1; r <= 9; r++) {
  for(var y=1;y<=r;y++) {
    str99 += y+ 'x' + r + '=' + r * y + ' ';
  }
  str99 += '\n';
}
console.log(str99)

//for循环小结
// for循环可以重复执行某些相同的代码
//for循环可以重复执行些许不同的代码，因为我们有计数器
// for循环可以执行某些操作，比如算数运算符加法操作
// 随着需求增加，双重for循环可以做更多、更好看的效果
// 双重for循环，外层循环一次，内层for循环全部执行



// 1.while循环语法结构
// while(条件表达式) {
//   //循环体
// }
// 2.执行思路  当条件表达式结果为true 则执行循环体  否则 退出循环
var numb = 1;
while(numb < 5) {
  console.log('wyb');
  numb++
}
// wyb
// wyb
// wyb
// wyb
console.log(numb) //5


//do while 循环
// do {
//   //循环体
// }while (条件表达式)
// 2.执行思路 跟while不同的地方在于 do while 先执行一次循环体 再判断条件
// 如果为真， 则继续执行，否则退出循环
var w = 1;
do {
  console.log(w);
  w++;
} while(w <3) //1 2
console.log(w) //3




// continue 关键字
// continue 关键字用于立即跳出本次循环，继续下一次循环（本次循环中continue之后的代码就会少执行一次）

for (var c = 1;c<=5;c++) {
  if(c==3) {
    continue; //只要遇见continue 则退出本次循环  直接跳到下一次
  }
  console.log('c'+c)
}
// eg.求1-10之间，除了能被7整除之外的整数和
var sums = 0;
for(var s=1;s<=5;s++) {
  if(s % 3==0) {
    continue;
  }
  sums += s;
}
console.log(sums)//12

// c1
// c2
// c4
// c5



//break关键字
//break 关键字用于立即跳出整个循环（循环结束)
for (var bre = 1;bre<=5;bre++) {
  if(bre ==3) {
    break;
  }
  console.log('bre' + bre)
}

// bre1
// bre2
