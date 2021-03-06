// 运算符
// 运算符也被称为操作符，是用于实现赋值、比较和执行数运算等功能的符号
// 常用的运算符有：
              // 算术运算符
              // 递增和递减运算符
              // 比较运算符
              // 逻辑运算符
              // 赋值运算符
// + - * / %（取余）


// 浮点数  算术运算里面会有问题
console.log(0.1+0.2) //0.30000000000000004
console.log(0.07*100) //7.000000000000001
// 我们不能直接拿浮点数来进行比较是否相等
var num = 0.1+0.2
console.log(num==0.3) //false



//1.
// 前置递增（递减）运算符
// 先自加，后运算
var num1 = 1; 
console.log(++num1) //2
console.log(num1) //2
// 后置递增（递减）运算符
// 先返回值 后自加1
var num2 = 5;
console.log(num2--) //5
console.log(num2)//4


//2.比较运算符（关系运算符）
    // 概念：比较运算符是两个数据进行比较时所使用的运算符，
           //比较运算后，会返回一个布尔值(true/false)作为比较运算的结果
           // <  >  >=  <= 
           // ==判等号（判断两边值是否相等，会转型（隐式转换））   === 全等（要求值和数据类型都一致）
           // !==  != 不等号 

           console.log(18=='18') //true
           console.log(18==='18') //false



// 3.逻辑运算符
    //概念：逻辑运算符是用来进行布尔值运算的运算符，其返回值也是布尔值。经常用于多个条件的判断
    //&&   ||   !逻辑非

    console.log(3 > 5 && 3>2) //false
    console.log(3>5 || 3>2) //true
    console.log()


//4.短路运算(逻辑中断)
    // 短路运算的原理：
    //当有多个表达式（值）时，左边的表达式值可以确定结果时，
    //就不再继续运算右边的表达式的值
    //1.逻辑与
    //语法：表达式1&&表达式2
    //如果第一个表达式的值为真，则返回表达式2
    //如果第一个表达式的值为假，则返回表达式1
  
  console.log(123 && 456) //456
  console.log(0 && 456)//0
  console.log(0 && 1+2 && 456)//0

  //2.逻辑或
    // 语法：表达式1||表达式2
    //如果第一个表达式的值为真，则返回表达式1
    //如果第一个表达式的值为假，则返回表达式2
    console.log(123||456) //123


//5.赋值运算符
// 概念：用来把数据赋值给变量的运算符
// =   +=    -=  *=   /=   %=

var age=10;
age += 5;  //age=age+5
console.log(age)//15
var age1 = 2; age1 *= 5 //age1= age1*5 
console.log(age1) //10
