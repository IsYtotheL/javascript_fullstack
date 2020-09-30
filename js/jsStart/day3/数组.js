// 1.数组(Array):就是一组数据的集合 存储在单个变量下的优雅方式
// js中创建数组有两种方式
// 利用new 创建数组
// 利用数组字面量创建数组
// 1.1利用new 创建数组
// var 数组名 = new Array();
// var arr = new Array(); //创建一个新的空数组

// 1.2利用数组字面量创建数组
// var 数组名 = []; //空数组
//创建带初始值的数组
//var 数组名=['小白','小黑']; //用逗号分隔

// 获取数组元素  格式 数组名[索引号]  索引号从0开始
var arr1 = [1,2,'wyb'];
console.log(arr1) //[ 1, 2, 'wyb' ]
console.log(arr1[1]) //2



// 遍历数组（循环）
// 遍历：把数组元素从头到尾访问一次
var arr3 = ['red','green','yello'];
for(var i = 0;i<3;i++) {
  console.log(arr3[i])
}


// red
// green
// yello


// 1.新增数组元素  修改length长度
var arr8 = ['w','y','b'];
console.log(arr8.length); //3
arr8.length = 5;
console.log(arr8) //[ 'w', 'y', 'b', <2 empty items> ]
//console.log(arr[3]);



// 2.新增数组元素 修改索引号 追加数组元素
var arr9 = ['red','green','blue'];
arr9[3] = 'pink';
console.log(arr9);//[ 'red', 'green', 'blue', 'pink' ]
arr9[4] = 'hotpink';
console.log(arr9); //[ 'red', 'green', 'blue', 'pink', 'hotpink' ]
arr9[0] = 'yellow'; //替换原来的数组元素
console.log(arr9) //[ 'yellow', 'green', 'blue', 'pink', 'hotpink' ]
arr9 = '有点意思';//不要给直接给数组名赋值 否则会覆盖掉的以前的数据
console.log(arr9) //有点意思



var arro = [2,4,6,8,10,23,97,85,18];
var newArr = []; //newArr.length 就是0
var j = 0;
for(var o = 0; i < arro.length; i++) {
  if(arro[i] > 10) {
    // newArr[j] = arro[i]
    // j++;
    newArr[newArr.length] = arro[i];
  }
}
console.log(newArr) //[ 23, 97, 85, 18 ]


//删掉值为0
var arr2 = [3,0,5,7,8,0];
var nArr = [];
for(var i = 0;i<arr2.length;i++) {
  if(arr2[i] !=0) {
    nArr[nArr.length] = arr2[i];
  }
}
console.log(nArr) //[ 3, 5, 7, 8 ]

// 翻转数组
var ar = [1,2,3,4,5];
var nAr = [];
for(var m = ar.length -1;m>=0;m--) {
  nAr[nAr.length] = ar[m]
  
}
console.log(nAr) //[ 5, 4, 3, 2, 1 ]