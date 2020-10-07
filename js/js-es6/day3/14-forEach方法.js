
// 数组方法
// 迭代（遍历）方法：
// forEach()、map()、filter、some()、every() 

// array.forEach(function(currentValue,index,arr))

        // forEach 迭代(遍历) 数组
        var arr = [1, 2, 3];
        var sum = 0;
        arr.forEach(function(value, index, array) {
            console.log('每个数组元素' + value);
            console.log('每个数组元素的索引号' + index);
            console.log('数组本身' + array);
            sum += value;
        })
        console.log(sum);
// 每个数组元素1
// 每个数组元素的索引号0
// 数组本身1,2,3
// 每个数组元素2
// 每个数组元素的索引号1
// 数组本身1,2,3
// 每个数组元素3
// 每个数组元素的索引号2
// 数组本身1,2,3
// 6
