      // 递归函数 : 函数内部自己调用自己, 这个函数就是递归函数
      // 递归函数的作用和循环效果一样
      // 由于递归很容易发生“栈溢出”错误，所以必须要加退出条件return
      var num = 1;

      function fn() {
          console.log('我要打印6句话');

          if (num == 6) {
              return; // 递归里面必须加退出条件
          }
          num++;
          fn();
      }
      fn();