class Star {
  constructor(uname,age ) {
    this.uname = uname;
    this.age = age;
    console.log(this) //Star { uname: '王一博', age: undefined }
    // sing() //ReferenceError: sing is not defined
    this.sing(); ////王一博
  }
  sing() {
    // console.log(uname) //ReferenceError: uname is not defined
    console.log(this.uname);
  }
}

var wyb = new Star('王一博');
wyb.sing(); //王一博

// 1.在es6中类没有变量提升，所以必须先定义类，才能通过类实例化对象
// 2.类里面的共有的属性和方法一定要加this 使用