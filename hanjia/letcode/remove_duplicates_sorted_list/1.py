from typing import List #用到了List所以引入这个模块
class Solution:  #面向对象语法
  # removeDuplicates方法名 默认第一个参数self,代表对象本身
  # nums:数组，使用List类型，数组里每一项都是整型 ，[]声明类型 
  # ->表示返回值的类型 ； 利用缩进 冒号表示一个区块，可折叠

  def removeDuplicates(self, nums:List[int]) -> int: 
    if nums:
      slow = 0
      # for in 循环一遍  从第一个开始 循环数组的整个长度
      for fast in range(1, len(nums)):
        if nums[fast] != nums[slow]:
          slow += 1
          nums[slow] = nums[fast]
      return slow + 1
    else:
        return 0
 x = Solution()  # python中不需要new 只需要调用一下solution就可返回一个实例
 print(x.removeDuplicates(1,1,2))