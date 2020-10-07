// 改变函数内this指向  js提供了三种方法  call()  apply()  bind()
// 注意：call()方法的作用和 apply() 方法类似，
// 区别就是call()方法接受的是参数列表，
// 而apply()方法接受的是一个参数数组。


// 语法
// func.apply(thisArg, [argsArray])
// 参数
// thisArg
// 必选的。在 func 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
// argsArray
// 可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。 浏览器兼容性 请参阅本文底部内容。
// 返回值
// 调用有指定this值和参数的函数的结果


        // 2. apply()  应用 运用的意思
        var o = {
          name: 'andy'
      };

      function fn(arr) {
          console.log(this);
          console.log(arr); // 'pink'

      };
      fn.apply(o, ['pink']);
      // { name: 'andy' }
      // pink
      // 1. 也是调用函数 第二个可以改变函数内部的this指向
      // 2. 但是他的参数必须是数组(伪数组)
      // 3. apply 的主要应用 比如说我们可以利用 apply 借助于数学内置对象求数组最大值 
      // Math.max();
      var arr = [1, 66, 3, 99, 4];
      var arr1 = ['red', 'pink'];
      // var max = Math.max.apply(null, arr);
      var max = Math.max.apply(Math, arr);
      var min = Math.min.apply(Math, arr);
      console.log(max, min);//99 1
console.log(Math.max(100,10))//100
