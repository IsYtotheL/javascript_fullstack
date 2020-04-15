// function foo () {
//   var something = "cool";
//   var another = [1, 2, 3];
//   function doSomething () {
//     console.log(something);
//   }

//   function doAnother () {
//     console.log(another.join("!"));
//   }
// }


function CoolModule () {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething () {
    console.log(something);
  }
  function doAnother () {
    console.log(another.join("!"));

  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}

var foo = CoolModule ();
foo.doSomething(); // cool
foo.doAnother(); // 1!2!3

var foo1 = (function CoolModule1 () {
  var something1 = "good";
  var another1 = [4,5,6];

  function doSomething1 () {
    console.log(something1); //good 
  }
  function doAnother1 () {
    console.log( another1.join("!")); //4!5!6
  }

  return {
    doSomething1: doSomething1,
    doAnother1:doAnother1
  };
})();
foo1.doSomething1();
foo1.doAnother1();
// 模块也是普通的函数，因此可以接受参数

function CoolModule2(id) {
  function identify () {
    console.log(id);

  }
  return {
    identify: identify
  };
}

var foo3 = CoolModule2 ("foo 3");
var foo4 = CoolModule2("foo 4");
foo3.identify(); //foo 3
foo4.identify();// foo 4


var foo7 = (function CoolModule9 (id) {
  function change () {
    publicAPI.identify5 = identify6;
  }
  function identify7() {
    console.log(id);
  }

  function identify6 () {
    console.log(id.toUpperCase());
  }
  var publicAPI = {
    change: change,
    identify5: identify7
  };
  return publicAPI;
})("foo module");

foo7.identify5(); // foo module
  foo7.change();
  foo7.identify5()// FOO MODULE