// 默认绑定：
// 独立函数调用
// function foo() {
//   "use strict"
//   console.log(this.a);
// }

// var a = 2;
// foo();


function foo() {
  console.log(this.a);
}
var a= 2;
(function () {
  "use strict";
  foo();
})();