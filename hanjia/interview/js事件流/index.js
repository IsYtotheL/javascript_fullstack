//js事件流是怎样的? 知道什么是事件委托吗？
//事件机制分三个步骤
//1.window 往事件触发传播，遇到注册的捕获事件会触发
//2.传播到事件触发处时，触发注册的事件
//3.从事件触发处往window传播，遇到注册的冒泡事件会触发
// document.getElementById('app').addEventListener('click',function(){
//   console.log(123)
// })
var node = document.getElementById('app')
node.addEventListener(
  'click',
  function(event) {
    console.log(event)
  },
  false
)
//第三个参数同时为false,默认冒泡地位更高
//同时为true,按照顺序走，捕获在前

