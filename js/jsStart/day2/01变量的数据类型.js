// 1.2变量的数据类型
// 变量是用来存储值的所在处，它们有名字和数据类型。
// js是一种弱类型或者说动态语言
// 不用提前声明变量的类型，在程序运行过程中，类型会被自动确定

var num = 10; //num 属于数字型


 var x = 6;
console.log(typeof(x)); //number
var x = 'abc'
console.log(typeof(x)); //string

// 2.简单数据类型
// 2.1基本数据类型
// Number     数字型（整形和浮点型） 0
//Boolean     布尔值(true和false)   false
// String     字符串                 ""
// Undefined   var a;              undefined
// Null        var a = null;       null            


// 2.2数字型NUMBER
  // 3.数字型三个特殊值
    // Infinity 代表无穷大，大于任何我数值
    // Infinity 代表无穷小，小于任何数值
    // NaN   not a number 代表非数值 
    console.log('一博'- 18) //NaN
    console.log(isNaN(12)) //false
    console.log(isNaN('yibo')) //true


// 2.3字符串型String
    // 字符串可以是引号中的任意文本，其语法为单引号和双引号
    // 1.字符串引号嵌套
    // js可用单引号嵌套双引号，或用双引号嵌套单引号（外双内单，内单外双）
        var str = '我是"王二博"'
        console.log(str) //我是"王二博"
    // 2.字符串转义字符
    // \n 换行符，n是newline的意思
    //  \\  斜杠\
    // \'  单引号
    // \" 双引号
    //  \t tab缩进
    //   \b 空格  blank
    console.log('人间正道\n世界中心')
    // 人间正道
    // 世界中心

    // 1.检测获取字符串的长度 length
    var str1 = 'my name is linn' //15
    console.log(str1.length)
    // 2.字符串的拼接  + 只要有字符串和其他类型相拼接  最终的结果是字符串类型
    console.log('12' + 12) //1212
    var age = 23
    console.log('wyb' + age + '岁'); //wyb23岁
    // 变量不能加引号，因为加引号的变量会变成字符串




    // Boolean类型
    // true 为1    false为0
    var flag = true;
    var flag1 = false;
    console.log(true+1); //2
    console.log(false+1) //1

    // 2.6 Undefined 和 null.html
    var val = undefined;
    console.log(val + 'linn') //undefinedlinn
    console.log(val + 1) //NaN
    var space = null;
    console.log(space + 'yibo') //nullyibo
    console.log(space + 1) //1

    // typeof检测变量类型
    console.log(typeof null) //object  是一个bug

    // 3.2字面量
      // 字面量是在源代码中一个固定值的表示法，通俗来说，就是字面量表示如何表达这个值
      //  - 数字字面量：8，9，10
      //  - 字符串字面量：'黑马程序员',"大前端"
      //  - 布尔字面量:true,false

