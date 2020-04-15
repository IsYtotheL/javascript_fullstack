// // 箭头函数
// var foo = a => {
//   console.log(a);
// };

// foo(2);

//  function foo () {
//   var a1;
//   console.log(a1);
// }

// foo(3)

// var obj = {
//   id: 'awesome',
//   cool: function coolFn() {
//     console.log(this.id);
//   }
// };
// var id = "not awesome";
// obj.cool();
// setTimeout(obj.cool,100)


var obj = {
  count: 0,
  cool: function coolFn() {
    var self = this;
    if(self.count < 1) {
      setTimeout(function timer() {
        self.count++;
        console.log("awesome?");
      }, 100);
    }
  }
};
obj.cool(); // awesome?




var obj = {
  count: 0,
  cool: function coolFn () {
    if (this.count < 1) {
      setTimeout(function timer() {
        this.count++;
        console.log("more awesome");
      }.bind(this),100);
    }
  }
};
obj.cool();