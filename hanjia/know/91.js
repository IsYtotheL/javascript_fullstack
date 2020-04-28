function foo (a) {
  this.a = a;
  console.log(a)
}

var bar = new foo(2); //bar is not a function
// console.log(bar.a); //2
bar

