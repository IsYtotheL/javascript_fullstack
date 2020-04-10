// 闭包
function foo () {
  var a = 2;
  function bar () {
    console.log(a); //2
  }
  bar();
}
foo();


function fo () {
  var b = 3;
  function baz () {
    console.log(b);
  }
  return baz;
}
var bal = fo();
bal(); //3


function fooo() {
  var a =2;
  function bab() {
    console.log(a); // 2
  }
  bar1(bab);
}

function bar1(fn) {
  fn();
}
fooo();

