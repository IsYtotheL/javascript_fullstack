// 我们为什么需要使用构造函数
// 就是因为我们前面两种创建对象的方式只能创建一个对象
// 因此我们可以利用函数的方法，重复这些相同的代码 我们把这个函数称为 构造函数
// 这个函数不一样，里面封装的不是普通代码  而是  对象
// 构造函数 就是把我们对象里面一些相同的属性和方法 抽象出来封装到函数里面


// new 构造函数名();
function Star(uname,age,sex) {
  this.name = uname;
  this.age = age;
  this.sex = sex;
  this.sing = function(wg) {
    console.log(wg)
  }
}
var p1 = new Star('wyb',22,'男','无感')
console.log(p1) //Star { name: 'wyb', age: 22, sex: '男',sing: [Function] }
p1.sing('无感') //无感

// 1.构造函数名字首字母要大写
// 2.我们构造函数不需要return 就可以返回结果
// 3.我们调用构造函数 必须使用new
// 4.我们只要new Star() 调用函数就创建一个对象 
// 5.我们的属性和方法前面必须添加this


// 构造函数和对象
// 1.构造函数 泛指的某一大类  类似于 java 语言里面的 类 class
// 2.对象 特指 是一个具体的事物，通过new关键字创建对象的过程我们也称为对象实例化




// 3.new 关键字
    // new在执行时会做四件事情
    // 1.在内存中创建一个新的空对象
    // 2.让this指向这个新的对象
    // 3.执行构造函数里面的代码，给这个新对象添加属性和方法
    // 4.返回这个新对象（所以构造函数里面不需要return)





// 4.遍历对象属性
// for...in语句用于对数组或对象的属性进行循环操作
var obj = {
  name:'linn',
  age:23
}
for(var k in obj) {
  console.log(k); //k变量 输出 得到的是属性名
  console.log(obj[k]);//obj[k]得到的是 属性值
}
// name
// linn
// age
// 23


