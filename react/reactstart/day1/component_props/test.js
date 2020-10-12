// 1.打包
function fn(...as){
  console.log(...as)
}
fn(1,2,3)
fn(1,2)

// 1 2 3
// 1 2


// 2.解包
const arr1 = [1,2,3]

const arr2 = [6,...arr1,9]

console.log(arr2)//[ 6, 1, 2, 3, 9 ]


