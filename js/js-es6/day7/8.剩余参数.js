    // 剩余参数语法允许我们将一个不定数量的参数表示为一个数组
    const sum = (...args) => {
			let total = 0;
			args.forEach(item => total += item);
			return total;
		};

		console.log(sum(10, 20));//30
    console.log(sum(10, 20, 30));//60
    
    function addA (...args) {
      let res = 0;
      args.forEach(function(item) {
        res=res+item;
      })
      return res;
    }
    console.log(addA(2,3,1))//6 
		

		let ary1 = ['张三' , '李四', '王五'];
		let [s1, ...s2] = ary1;
		console.log(s1)//张三
		console.log(s2)//[ '李四', '王五' ]