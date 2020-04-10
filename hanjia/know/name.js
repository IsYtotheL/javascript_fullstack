// 匿名函数
setTimeout( function () {
  console.log("I waited 1 second");
},1000);


// 具名
setTimeout(function timeoutHandler () {
  console.log(" I waited 2 second");
}, 2000)