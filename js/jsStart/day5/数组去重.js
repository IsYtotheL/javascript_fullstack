// 核心算法：我们遍历旧数组，然后拿着旧数组元素去查询新数组，
//如果该元素在新数组里面没有出现过，我们就添加，否则不添加

function unique(arr) {
  var newArr = [];
  for(var i = 0;i<arr.length;i++) {
    if(newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
var demo = unique([1,2,3,2,1,4,5])
console.log(demo) //[ 1, 2, 3, 4, 5 ]
