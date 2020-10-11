  // es6提供了新的数据结构Set,它类似于数组，但是成员的值是唯一的，没有重复的值。
  // Set本身是一个构造函数，用来生成Set数据结构
  // Set函数可以接受一个数组作为参数，用来初始化
  const s1 = new Set();
		console.log(s1.size)//0

		const s2 = new Set(["a", "b"]);
		console.log(s2.size)//2

		const s3 = new Set(["a","a","b","b"]);
		console.log(s3.size)//2
		const ary = [...s3];
		console.log(ary)////[ 'a', 'b' ]
		
		const s4 = new Set();
		// 向set结构中添加值 使用add方法
		s4.add('a').add('b');
		console.log(s4.size)//2

		// 从set结构中删除值 用到的方法是delete
		const r1 = s4.delete('c');
		console.log(s4.size)//2
		console.log(r1);//false

		// 判断某一个值是否是set数据结构中的成员 使用has
		const r2 = s4.has('d');
		console.log(r2) //false

		// 清空set数据结构中的值 使用clear方法
		s4.clear();
		console.log(s4.size);//0
		
		// 遍历set数据结构 从中取值
		const s5 = new Set(['a', 'b', 'c']);
		s5.forEach(value => {
			console.log(value)//a b c
		})