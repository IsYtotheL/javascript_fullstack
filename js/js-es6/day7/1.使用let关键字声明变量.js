/*
			let关键字就是用来声明变量的

			使用let关键字声明的变量具有块级作用域

			在一个大括号中 使用let关键字声明的变量才具有块级作用域 var关键字是不具备这个特点的

			防止循环变量变成全局变量

			使用let关键字声明的变量没有变量提升

			使用let关键字声明的变量具有暂时性死区特性

		*/
		
		/* --------let关键字就是用来声明变量的-------- */
		// let a = 10;
		// console.log(a);//10
		
		/* --------使用let关键字声明的变量具有块级作用域-------- */
		if (true) {
			let b = 20;
			console.log(b)//20
			if (true) {
				let c = 30;
			}
			//console.log(c); // c is not defined
		}
	//	console.log(b)//b is not defined
		
		/* -------在一个大括号中 使用let关键字声明的变量才具有块级作用域 var关键字是不具备这个特点的--------- */

		if (true) {
			let num = 100;
			var abc = 200;
		}
		console.log(abc);//200
		//console.log(num)//ReferenceError: num is not defined


		/* -------防止循环变量变成全局变量--------- */
		for (let i = 0; i < 2; i++) {}
    //console.log(i);//i is not define
    for(var j = 0;j<3;j++) {
     
    }
    console.log(j)//3

		/*-----使用let关键字声明的变量没有变量提升------*/
		// console.log(a);// a is not defined
		// let a = 100;
		

		/* -------使用let关键字声明的变量具有暂时性死区特性------- */
		// var num = 10
		// if (true) {
		// 	console.log(num); // num is not defined
		// 	let num = 20;
    // }
//     ES6 明确规定, 如果块级作用域中存在let和const命令, 
//     则这个区块中对这些命令声明的变量从一开始就形成封闭作用域,
// let命令声明变量之前, 该变量都是不可用的, 这在语法上称为暂时性死区
