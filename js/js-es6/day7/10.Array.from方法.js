  // Array的扩展方法
  // 构造函数方法:Array.from()
  // 将类数组或可遍历对象转换为真正的数组

  // var arrayLike = {
	// 		"0": "张三",
	// 		"1": "李四",
	// 		"2": "王五",
	// 		"length": 3
	// 	}

	// 	var ary = Array.from(arrayLike);
	// 	console.log(ary) //[ '张三', '李四', '王五' ]
    
    // 方法还可以接受第二个参数，作用类似于数组的map方法，
    // 用来对每个元素进行处理，将处理后的值放入返回的数组
    
		var arrayLike = {
			"0": "1",
			"1": "2",
			"length": 2
		}

    var ary = Array.from(arrayLike, item => item * 2)
    var arr1 = Array.from(arrayLike,function(item){return item*3})
    console.log(ary)//[ 2, 4 ]
    console.log(arr1)//[ 3, 6 ]