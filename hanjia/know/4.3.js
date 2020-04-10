// 函数优先
foo (); //1
var foo;
function foo () {
  console.log(1);
}
foo = function () {
  console.log(2);
};


fo(); //3
function fo () {
  console.log(1);
}
var fo = function () {
  console.log(2);
};
function fo () {
  console.log(3);
}
