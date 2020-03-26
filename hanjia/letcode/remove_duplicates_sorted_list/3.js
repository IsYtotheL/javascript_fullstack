var removeDuplicates = function(nums) {
  const size = nums.length;// 原数组的长度
  let slowP = 0;
  for (let fastP = 0; fastP  <size; fastP++) { // 快指针
    console.log(nums[fastP]);

  }
}
removeDuplicates([1,1,2,2,3])
console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([1,2,3,4,6]))