# 删除有序数组中的重复项
- 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的长度。
不要使用额外的数组空间，你必须在原地修改输入数组并在使用O(1)额外空间的条件下完成。
示例1：
给定数组 nums=[1,1,2],
函数应该返回新的长度2， 并且元素组 nums 的前两个元素被修改为 ，
。
你不需要考虑数组中超出新长度后面的元素。


读题：
给定一个排序数组
sortedArr [1,1,2] 3删除重复元素 从小到大排序 使得每个元素唯一
return[1,2] 2 要求不使用额外的数组空间
- 一次遍历 ？
res []  空间复杂度 O(n)
for
排好序 后面的项一定会大于等于前面的项
等于要*原地删除的
res length
抽象  数理逻辑
- leetcodeAnimation
- 动图
两个指针 pre cur
cur 一直在往前跑  一次循环的每一项遍历
pre 后面追
pre cur arr 前一个， 后一个
不等于pre+1
相等时 pre 不走， 会慢下来
如果cur pre不一样， 那么pre+1 值等于cur
从头到尾都是排好序的不重复数
每个位置放什么数？
pre 指针没有跟上cur的速度，表示有重复
pre cur n 个空位
pre +1 删除，把当前cur的值交给 pre
- 快慢指针
 1. 一次循环 cur++ 一直跑
 2. cur 跟pre arr[]不动
 3. 当cur 再走的时候，继续比较
 新的cur 跟旧的pre 
 不等时 pre++ 并且把 cur值给新的pre 
 把因为之前重复空出来的位置 给填上
 4. cur > length
- 数据结构 链表
 [1,1,2] 链表
 linkList  next
 1  1  1  next 原来指向1   改成指向2
 把数组要维持位置  快慢指针好理解的多