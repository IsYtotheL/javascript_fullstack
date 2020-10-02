// 当我们不确定有多少个参数传递的时候，可以用arguments来获取。
//在JavaScript中，arguments实际上它是当前函数的一个内置对象。所有函数都内置了一个argument对象，
//argumen对象中存储了传递的所有实参

function fn() {
  console.log(arguments);//里面存储了所有传递过来的实参 [Arguments] { '0': 1, '1': 2, '2': 3 } 
  console.log(arguments.length);//3
  console.log(arguments[2])//3
  for(var i = 0; i < arguments.length;i++) {
    console.log(arguments[i]);//1 2 3
  }
}
fn(1,2,3);
// 伪数组 并不是真正意义上的数组
// 1.具有数组的length属性
// 2.按照索引的方式进行存储的
// 3.他没有真正数组的一些方法 pop() push()等等
