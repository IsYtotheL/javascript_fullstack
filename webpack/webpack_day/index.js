import a from './a'
import b from './b'
import pic from './img/85'
// 既然webpack默认只认识js模块那么遇到非js模块该怎么办？
// loader 
a()
b()

function lm() {
  console.log('welcome to lm')
}
lm()