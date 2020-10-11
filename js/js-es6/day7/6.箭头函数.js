	// 箭头函数是用来简化函数定义语法的
	// 把箭头函数赋值给一个变量 通过变量名字调用函数
		const fn = () => {
			console.log(123)
		}
		fn();//123
		
		// 在箭头函数中 如果函数体中只有一句代码 并且代码的执行结果就是函数的返回值 函数体大括号可以省略
		// function sum(num1,num2) {
		// 	return num1 + num2;
		// }
		// console.log(sum(3,5)) //8
		const sum = (num1,num2) => num1+num2
		console.log(sum(5,6))//11
		
		// const sum = (n1, n2) => n1 + n2;	 
		// const result = sum(10, 20);
		// console.log(result)
		
		// 在箭头函数中 如果形参只有一个 形参外侧的小括号也是可以省略的
		// const fn = v => {
		// 	alert(v);
		// }
		// fn(20)
		const fun = v => console.log(v)
		fun(9) //9

		// function f1 (m) {
		// 	return m;
		// }

		const f2 = m2 => m2;
		console.log(f2(3))//3
		// 箭头函数不绑定this 箭头函数没有自己的this关键字 
		// 如果在箭头函数中使用this this关键字将指向箭头函数定义位置中的this
		// 指向的是函数定义位置的上下文this
		
		// function fn () {
		// 	console.log(this);//{ name: 'zhangsan' }
		// 	return () => {
		// 		console.log(this)//{ name: 'zhangsan' }
		// 	}
		// }

		// const obj = {name: 'zhangsan'};

		// const resFn = fn.call(obj);

		// resFn();

		function f8 () {
			console.log('this'+this); //this[object global]
			// return () => {
			// 	console.log(this)
			// }
		}
		f8()