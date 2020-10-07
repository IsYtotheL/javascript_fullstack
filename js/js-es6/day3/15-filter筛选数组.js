 //filter()方法创建一个新的数组，新数组中的元素是通过检查指定数组中
//  符合条件的所有元素，主要用于筛选数组
// array.filter(function(currentValue,index,arr))
// arr：数组对象本身

 // filter 筛选数组
 var arr = [12, 66, 4, 88, 3, 7];
 var newArr = arr.filter(function(value, index) {
     // return value >= 20;
     return value % 2 === 0;
 });
 console.log(newArr); //[ 12, 66, 4, 88 ]