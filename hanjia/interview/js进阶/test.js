let foo = {
  name: 'wn',
  fn:function bar(x) {}
}
function bar(x) {
  console.log(this.name)
  console.log(x)
}
bar.call(foo,666) //wn //call里面可有多个参数