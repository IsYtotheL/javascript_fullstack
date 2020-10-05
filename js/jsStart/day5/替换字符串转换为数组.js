// 替换字符串 replace('被替换的字符','替换为的字符')  它只会替换第一个字符
var str = 'andyandy';
console.log(str.replace('a','b')); //bndyandy

// 把所有的o替换为*
var str1 = 'sofweofwodovox';
while (str1.indexOf('o')!==-1) {
  str1 = str1.replace('o','*');//s*fwe*fw*d*v*x
}
console.log(str1);


//2.字符串转为数组 split('分隔符')
var str2 = 'red,pink,blue';
console.log(str2.split(',')); //[ 'red', 'pink', 'blue' ]



// toUpperCase()
// toLowerCase()


