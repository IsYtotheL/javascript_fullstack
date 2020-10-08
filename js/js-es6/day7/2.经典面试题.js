let arr = [];

for (let i = 0; i < 2; i++) {
  arr[i] = function () {
    console.log(i);
  }
}

arr[0]();//0
arr[1]();//1

// 变量j是全局的，函数执行时输出的都是全局作用域下的i值
var arr1 = [];
for(var j=0;j<3;j++) {
  arr1[j] = function () {
    console.log(j);
  }
}
arr1[0]();//3
arr1[1]()//3
var num = 100;
function m () {
  //var num = 20; //20
  console.log(num); 
 // var num = 20;//undefined 因为有变量提升 但是赋值不会提升
//let num = 30;// num is not defined
}
m()
