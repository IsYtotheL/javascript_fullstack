// 严格模式下 无法修改
function foo(str) {
  "use strict";
  eval(str);
  console.log(a); //ReferenceError: a is not defined
}

foo("var a = 2");