// 隐藏内部实现

function doSometing(a) {
  b = a + doSometingElse(a * 2);  // 2 + 3
  console.log(b * 3);
}
function doSometingElse(a) {
  return a- 1;
}

var b;

doSometing(2);// 15 


console.log('------------')

function doSometing(a) {
  function doSometingElse(a) {
    return a -1 
  }
  var b;
  b = a + doSometingElse( a * 2); // b = 2 + 3
  console.log( b * 3);
}
doSometing(2); // 15


console.log('--------------------')
// 规避冲突
function foo () {
  function bar(a) {
    i = 3;// 修改 for 循环 所属作用域的i
    console.log( a + i);
  }
  for (var i = 0; i < 10; i ++) {
    bar(i * 2); // 糟糕，无限循环了
  }
}
foo();


