		// 使用const关键字声明的常量具有块级作用域
		if (true) {
			const a = 10;
			if (true) {
				const a = 20;
				console.log(a);//20
			}
			console.log(a);//10
		}
	//	console.log(a);//ReferenceError: a is not defined
		
    // 使用const关键字声明的常量必须赋初始值
    //const p;//SyntaxError: Missing initializer in const declaration
		const PI = 3.14;
		
		// 常量声明后值不可更改 
		const PI = 3.14;
		// PI = 100;
		const ary = [100, 200];
		ary[0] = 123;
		//ary = [1, 2]//TypeError: Assignment to constant variable.
		console.log(ary);//[ 123, 200 ]