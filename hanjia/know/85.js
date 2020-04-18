function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo
};
obj.foo()


function foo1() {
  console.log(this.a1);
}
var obj2 = {
  a1: 42,
  foo1:foo1
};
var obj1 = {
  a1: 2,
  obj2: obj2
};
obj1.obj2.foo1();