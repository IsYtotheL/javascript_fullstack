// 流程控制主要有三种结构，分别是顺序结构、分支结构和循环结构

// 1.if的语法结构  
//  if(条件表达式) {
//    //执行语句
//  }
 //2.执行思路 如果if里面的条件表达式为真，则执行大括号里面的执行语句
 var age6 = 20;
 if(age6 >= 18) {
   console.log('成年了'); //成年了
 }
// // if(条件表达式) {
//   //执行语句1
// } else {
//   //执行语句2
// }
var age9 = 16;
if(age9 >=18) {
  console.log('可以去网吧')
} else {
  console.log('回家做作业去') //回家做作业去
}

// 多分支语句
// if(条件表达式1) {
//   //语句1；
// } else if(条件表达式2) {
//   //语句2；
// } else {
//   //最后的语句
// }


// switch也是多分支语句
//  switch(表达式) {
//   case value1:
//     执行语句1;
//     break;
//   case value2:
//     执行语句2;
//     break;
//     ...
//     default:
//       执行最后的语句;
// }
var tj = 2;
switch(tj) {
  case 1:
    console.log('1');
    break;
  case 2:
      console.log('2'); //2
      break;
      default:
        console('没有');

}
// tj的值和 case里的值相匹配的时候是全等  必须是值和数据类型一致才可以