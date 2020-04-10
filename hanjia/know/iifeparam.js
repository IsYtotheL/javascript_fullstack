var a  = 2;
(function IIFE(global) {
  var a = 3;
  console.log(a);
  console.log(global.a);
})(window);
console.log(a);


var a2 = 2;
function IIFE2 (g) {
  var a2 = 3;
  console.log(a2);
  console.log(g.a2)
}
IIFE2(window);  
console.log(a2);

// console.log('--------');
// var a = 3
// function c (b) {
//   console.log(b.a) //3
// }
// c(window)