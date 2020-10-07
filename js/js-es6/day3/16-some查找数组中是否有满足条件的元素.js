//  array.some(function(currentValue,index,arr))

// some()方法用于检测数组中的元素是否满足指定条件，查找数组中是否有满足条件的元素
// 注意它返回值是布尔值，如果查找到这个元素，就返回true,如果找不到就返回false
// 如果找到第一个满足条件的元素，则终止循环，不再继续查找

 
 
 
 // some 查找数组中是否有满足条件的元素 
        var arr = [10, 30, 4];
        var flag = arr.some(function(value) {
            // return value >= 20;
            return value < 3;
        });
        console.log(flag);//false
        var arr1 = ['red', 'pink', 'blue'];
        var flag1 = arr1.some(function(value) {
            return value == 'pink'; //true
        });
        console.log(flag1);
        // 1. filter 也是查找满足条件的元素 返回的是一个数组 而且是把所有满足条件的元素返回回来
        // 2. some 也是查找满足条件的元素是否存在  返回的是一个布尔值 如果查找到第一个满足条件的元素就终止循环