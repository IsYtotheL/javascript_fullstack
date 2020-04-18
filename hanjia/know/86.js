function foo() {
  console.log(this.a);
}
var obj = {
  a: a,
  foo: foo
};
var bar = obj.foo;
var a = "opps, global";
bar();