//回调函数是在循环结束后才执行
for (var i = 1; i<= 5; i++) {
  setTimeout(function timer() {
    console.log(i);// 输出了5次6
  },  i* 1000);
}


for (var j = 1; j <= 3; j++) {
  console.log(j); // 1 2 3
}

function foo () {
  for (var k=1; k < 4; k++) {
    console.log(k); //1 2 3
  }
  console.log(k) //4
}

foo ()

// 立即执行函数来创建作用域,但是作用域是空的
for (var i =1 ; i<= 5; i++) {
  (function () {
    setTimeout(function timer() {
      console.log(i);// 输出了5次6
    },  i* 1000);
  })()
}

for (var i1 =1; i1 <= 5; i1++) {
  (function () {
    var j = i1;
    setTimeout(function timer() {
      console.log(j);// 1 2 3 4 5 
    },  j* 1000);
  })()
}

// 以上代码改进
for (var i2 =1; i2 <= 5; i2++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);// 1 2 3 4 5 
    },  j* 1000);
  })(i2)
}

for (var i2 =1; i2 <= 5; i2++) {
  let j = i2;
  (function (j) {
    setTimeout(function timer() {
      console.log(j);// 6 个undefined
    },  j* 1000);
  })()
}
for (let i3 =1; i3 <= 5; i3++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);// 1 2 3 4 5
    },  j* 1000);
  })(i3)
}