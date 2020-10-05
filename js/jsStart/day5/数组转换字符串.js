// 数组转换字符串
// 1.toString() 将我们的数组转换为字符串
var arr = [1,2,3];
console.log(arr.toString()); //1,2,3
// 2.join('分隔符')
var arr1 = ['green','red','blue'];
console.log(arr1.join()); //green,red,blue
console.log(arr1.join('&')); //green&red&blue

// 3.concat()
// 连接两个或多个数组 不影响原数组  返回一个新数组
let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
//Hello, Kevin. Have a nice day.
let greetList = ['Hello', ' ', 'Venkat', '!'] 
console.log("-".concat(...greetList)) //-Hello Venkat!
// 4.slice()
// 数组截取slice(begin,end) 返回被截取项目的新数组
var str1 = 'The morning is upon us.', // str1 的长度 length 是 23。
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2); // 输出：he morn
console.log(str3); // 输出：morning is upon u
console.log(str4); // 输出：is upon us.
console.log(str5); // 输出：""
var strr = 'hello'
console.log(strr.slice(1,3)) //el   - 0h (e1 l2) l3
console.log(strr.indexOf('h')) //0
// 例 1：str.slice(1, 4) 提取第二个字符到第四个字符
//（被提取字符的索引值（index）依次为 1、2，和 3）。

// 例 2：str.slice(2, -1) 提取第三个字符到倒数第一个字符。
// 5.splice() 
// 数组删除splice(第几个开始，要删除个数)  返回被删除项目的新数组，注意，这个会影响原数组

// 从第 3 位开始删除 1 个元素
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);
console.log(myFish) //[ 'angel', 'clown', 'drum', 'sturgeon' ]
console.log(removed)//[ 'mandarin' ]

// 运算后的 myFish: ["angel", "clown", "drum", "sturgeon"]
// 被删除的元素: ["mandarin"]
// 从第 2 位开始删除 1 个元素，插入“trumpet”
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, "trumpet");

// 运算后的 myFish: ["angel", "clown", "trumpet", "sturgeon"]
// 被删除的元素: ["drum"]
