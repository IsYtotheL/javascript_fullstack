// 改变函数内this指向  js提供了三种方法  call()  apply()  bind()

// 语法
// function.call(thisArg, arg1, arg2, ...)
// 参数
// thisArg
// 可选的。在 function 函数运行时使用的 this 值。
// 请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，
// 则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
// arg1, arg2, ...
// 指定的参数列表。
// 返回值
// 使用调用者提供的 this 值和参数调用该函数的返回值。
// 若该方法没有返回值，则返回 undefined。

        // 1. call()
        var o = {
          name: 'andy'
      }

      function fn(a, b) {
          console.log(this);
          console.log(a + b);

      };
      fn.call(o, 1, 2);
      // { name: 'andy' }
      // 3
      // call 第一个可以调用函数 第二个可以改变函数内的this 指向
      // call 的主要作用可以实现继承
      function Father(uname, age, sex) {
          this.uname = uname;
          this.age = age;
          this.sex = sex;
      }

      function Son(uname, age, sex) {
          Father.call(this, uname, age, sex);
      }
      var son = new Son('刘德华', 18, '男');
      console.log(son);
      // Son { uname: '刘德华', age: 18, sex: '男' }