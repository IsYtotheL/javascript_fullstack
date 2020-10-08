  // 数组解构允许我们按照一一对应的关系从数组中提取值
  // 然后将值赋值给变量。对象也可以解构
  let ary = [1,2,3];
  let [a, b, c, d, e] = ary;//[]不代表数组，代表解构
  console.log(a)//1
  console.log(b)//2
  console.log(c)//3
  console.log(d)//undefined
  console.log(e)//undefined