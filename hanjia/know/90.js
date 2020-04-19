function foo(el) {
  console.log(el, this.id);
}

var obj = {
  id: "awesome"
};
[1,2,3].forEach(foo,obj);

// var arry= [1,2,3];
// arry.forEach(function(obj) {
//   console.log(obj)
// })


// var obj = {
//   id:"awesome"
// };
// [1,2,3].forEach(function foo(el) {
//   console.log(el,this.id);
// },obj)
