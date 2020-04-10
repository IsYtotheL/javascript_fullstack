
// ReferenceError 对象代表当一个不存在的变量被引用时发生的错误
foo ();
function foo () {
  console.log(a); // undefined
  var a = 2;
}


function fooo () {
  var a1;
  console.log(a1);// undefined
  a1= 3;
}
fooo();


fo (); // TypeError: fo is not a function
var fo = function bar() {
  var a2;
  console.log(a2);
  a2  = 5;
}


test(); // TypeError: test is not a function 
baz(); //ReferenceError： baz is not defined
var test = function baz() 
{
  var c2 = 9;
  console.log(c2); 
}