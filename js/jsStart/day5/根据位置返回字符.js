// 1.charAt(index) 根据位置返回字符  str.charAt(0)
var str = 'wyb'
console.log(str.charAt(2)) //b
// 遍历所有字符
for(var i = 0;i<str.length;i++) {
  console.log(str.charAt(i));
}
// w
// y
// b
// 2.charCodeAt(index) 获取指定位置处字符的ASCII码  str.charCodeAt(0)
console.log(str.charCodeAt(0)) //119
// 3.str[index] 获取指定位置处字符   html5 IE8+支持 和charAt等效
console.log(str[1]) //y