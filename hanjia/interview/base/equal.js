// == 和 === 有什么区别？

// 1 == '1' //true

判断 x 和 y 是否相同，需要走哪些流程：
1.首先判断两者类型是否相同，相同的话就比较大小
2.类型不同的话，那么就会进行类型转换
3.会判断是否在对比null和undefined,是的话会返回true
4.判断两者类型是否为 string 和 Number,是的话就会将字符串转换为number

1 == '1'  // true '1' => 1
5.判断其中一方是否为boolean,是的话就会把boolean转为number再进行判断
 '1' == true
 '1' == 1
  1 == 1 // true
  6. 判断其中一方是否为object, 且另一方为string、number或者symbol,是的话就将object转为原始类型再判读
   '1' == {name: 'xyz'} //false
   '1' == '[object Object]' //转为字符串  数组

   1 == {name: 'xyz'}  // false
   1 == '[object Objec]'
   1 == Number('[object Object]')
   1 == NaN



   // [] == ![] true 还是false,为什么？
  //  首先我们知道，！的优先级要大于==的，所以先运算右边，![]---->结果为false
  //  []==false
  //  [] == false //相当于，Number([])为0，Number(false)为0，
  //  过程：[]==![]  ---->   []==false   ----->   0==0   --->//true



  //对于 === 来说就简单多了，直接判断 类型 && 值 是否相同，一个不等就不等
   // == 判断值相不相等
   