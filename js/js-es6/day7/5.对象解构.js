  // 对象解构允许我们使用变量的名字匹配对象的属性
  // 匹配成功 将对象属性的值赋值给变量
		
  let person = {name: 'lisi', age: 30, sex: '男'};
  let { name, age, sex } = person;
  console.log(name)//lisi
  console.log(age)//30
  console.log(sex)//'男'
  
  let {name: myName} = person;//左边的name只用于属性匹配，右边的myName是真正的变量
  console.log(myName)//lisi
