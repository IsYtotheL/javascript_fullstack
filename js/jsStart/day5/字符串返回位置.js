// 字符串对象  根据字符返回位置
// str.indexOf('要查找的字符串',[起始的位置])
var str = '改革春风吹满地,春天来了!'
console.log(str.indexOf('春')) //2
console.log(str.indexOf('春',[4])) //8


// 查找字符串"odkosfofvcsos"中所有o出现的位置以及次数
// 核心算法:先查找第一个o出现的位置
// 然后 只要indexOf 返回的结果不是 -1 就继续往后查找
// 因为indexOf 只能查找到第一个，所以后面的查找，一定是当前索引加1，从而继续查找
var str1 = 'odkosfofvcsos';
var index = str1.indexOf('o');
var num = 0;
while(index!==-1) {
  console.log(index);
  num++;
  index = str1.indexOf('o',index + 1); //从index + 1开始
}
console.log('o出现的次数是:' + num);

// 0
// 3
// 6
// 11
// o出现的次数是:4
