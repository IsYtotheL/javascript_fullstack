 // 利用递归函数求1~n的阶乘 1 * 2 * 3 * 4 * ..n
 function fn(n) {
  if (n == 1) {
      return 1;
  }
  return n * fn(n - 1);
}
console.log(fn(3)); //6
console.log(fn(4)); //24
// 详细思路 假如用户输入的是3
//return  3 * fn(2)
//return  3 * (2 * fn(1))
//return  3 * (2 * 1)
//return  3 * (2)
//return  6