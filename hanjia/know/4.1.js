 a = 2;
 var a;
 console.log(a); // 2


 console.log(b) // undefined
  var b = 3;



  // 对于第一个代码片段会以如下形式进行处理
  // var a2;
  // a2 = 2;
  // console.log(a2);

  // 第二个代码片段
  // var b2;
  // console.log(b2);
  // b2 = 3;


  foo ();
  function foo() {
    console.log(f); // undefined
    var f = 2;
  }

  function fol () {
    var m = 5;
    console.log(m) //5 
  }
  fol()