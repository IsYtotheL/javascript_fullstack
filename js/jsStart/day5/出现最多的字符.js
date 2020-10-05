// 有一个对象 来判断是否有该属性  对象['属性名']
var o = {
  age:18
}
if(o['sex']) {
  console.log('里面有该属性')
}else {
  console.log('没有该属性') //没有该属性
}


// 判断一个字符串中出现最多的字符，并统计其次数
// 1.核心算法：利用charAt()遍历这个字符串
// 2.把每个字符都存储给对象，如果对象没有该属性，就为1，如果存在了就+1
// 3.遍历对象，得到最大值和该字符

var str = 'ajfnijfwfwasdaoacnw';
var o = {};
for (var i = 0;i<str.length;i++) {
  var chars = str.charAt(i); //chars 是字符串的每一个字符
  if(o[chars]) { //o[chars]得到的是属性值
   // console.log(o[chars])
    o[chars]++;
  }else {
    o[chars] = 1;
  }
}
console.log(o);//{ a: 4, j: 2, f: 3, n: 2, i: 1, w: 3, s: 1, d: 1, o: 1, c: 1 }
// 2.遍历对象
var max = 0;
var ch = ''
for (var k in o) {
  // k得到的是属性名 a j ...
  // o[k]得到的是属性值 4 2...
  if(o[k] > max) {
    max = o[k];
    ch = k;
  }
}
console.log(max); //4
console.log(ch) //a