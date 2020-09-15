var users = [
  {id:1,naem:'张三'},
  {id:2,name:'张三'},
  {id:3,naem:'张三'},
  {id:4,name:'张三'}
]
Array.prototype.myFind = function(conditionFunc) {
  // var conditionFunc = function(item,index) {return item.id ===4 }
  for(var i = 0; i< this.length;i++) {
    if(conditionFunc(this[i],i)) {
      return this[i]
    }
  }
}

var ret = users.myFind(function(item,index) {
  return item.id === 4
})
console.log(ret)
// { id: 4, name: '张三' }