// 实例方法：find()
// 用于找出第一个符合条件的数组成员，如果没有找到返回undefined

var ary = [{
  id: 1,
  name: '张三'
}, {
  id: 2,
  name: '李四'
}];
let target = ary.find(item => item.id == 3);
let res = ary.find(function (item) {return item.id==2})
console.log(target)//undefined
console.log(res)//{ id: 2, name: '李四' }