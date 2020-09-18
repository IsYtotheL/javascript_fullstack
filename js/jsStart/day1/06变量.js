// 1.2变量在内存中的存储
// 本质：变量是程序在内存中申请的一块用来存放数据的空间

// 2.变量的使用
// - 变量声明
  // 声明变量
  // var age; //var 是一个js关键字，声明一个名称为age的变量
// - 赋值
  // age = 10; // = 用来把右边的值赋给左边的变量空间中 



  // 3.更新变量
  // 一个变量被重新赋值后，它原有的值就会被覆盖，变量值将以最后一次赋的值为准


  // 4.变量命名规范
  // (A-Za-z)、(0-9)、下划线、美元符号组成
  // 严格区分大小写
  // 不能以数字开头
  // 不能是关键字 保留字
  // 遵守驼峰命名法
  var app = 1;
  var App = 2;
  console.log(app+App) //3

  // 5.交换变量
  // 需要一个临时变量
  var temp;
  var apple1 = 'red';
  var apple2 = 'green';
  temp = apple1;
  apple1 = apple2;
  apple2 = temp;
  console.log('1'+apple1)//  1green
  console.log('2'+apple2)//2red




