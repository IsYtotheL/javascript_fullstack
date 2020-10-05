// 2.3创建类
// 语法：
// class name {
//   // class body
// }

// 创建实例：
// var xx = new name();

// 注意:类必须使用new实例化对象

// 创建类，类名后面不要加小括号，生成实例，类名后面加小括号，构造函数不需要加function


class Star {
  // 类的共有属性放到 constructor 里面
  constructor (uname) {
    this.uname = uname;
  }
  sing(song) {
    // console.log('我唱歌');
    console.log(this.uname +'唱'+ song);
  }
}
// （1）我们类里面所有的函数不需要写function
// (2)多个函数方法之间不需要添加逗号分隔
var wyb = new Star('王一博');
var wwx = new Star('魏无羡')
console.log(wyb.uname); //王一博
wyb.sing('无感'); //王一博唱无感
wwx.sing('陈情') //魏无羡唱陈情

// 2.4类 constructor构造函数
// constructor方法是类的构造函数(默认方法),用于传递参数返回实例对象,
// 通过new命令生成对象实例时，自动调用该方法。如果没有显示定义，
// 类内部会自动给我们创建一个constructor()

