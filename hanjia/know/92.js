// function foo () {
//   console.log(this.a);
// }
// var obj1 = {
//   a: 2,
//   foo:foo
// };

// var obj2 = {
//   a: 3,
//   foo: foo
// };
// obj1.foo();
// obj2.foo();

// obj1.foo.call(obj2);
// obj2.foo.call(obj1);


// function foo(something) {
//   this.a = something;
// }

// var obj1 = {
//   foo: foo
// };
// var obj2 = {};
// obj1.foo(2);
// console.log(obj1.a);
// obj1.foo.call(obj2,3);
// console.log(obj2.a);

// var bar = new obj1.foo(4);
// console.log(obj1.a);
// console.log(bar.a);



function foo() {
  console.log(this.a);
}

var a = 2;

foo.call(null);



