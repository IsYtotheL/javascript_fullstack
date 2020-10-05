// 注意：
// 子类在构造函数中使用super,
// 必须放到this前面（必须先调用父类的构造方法，在使用子类构造方法）
class Father {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  sum (){
    console.log(this.x + this.y);
  }
}
class Son extends Father{
  constructor (x,y) {
   
    super(x,y);
     this.x = x;
    this.y = y;
  }
  sub() {
    console.log(this.x -this.y);
  }
}
var son = new Son(5,3);
son.sub(); //2
son.sum();//8

