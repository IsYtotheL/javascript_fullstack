var arr = [1500,1200,2000,2100,1800];
var newArr = [];
for(var i = 0;i<arr.length;i++) {
  if(arr[i] < 2000) {
   旧方式 // newArr[newArr.length] = arr[i];
    newArr.push(arr[i]); //[ 1500, 1200, 1800 ] //新方法
  }
}
console.log(newArr) //[ 1500, 1200, 1800 ]