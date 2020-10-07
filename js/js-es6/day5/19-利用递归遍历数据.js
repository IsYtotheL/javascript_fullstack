var data = [{
  id: 1,
  name: '家电',
  goods: [{
      id: 11,
      gname: '冰箱',
      goods: [{
          id: 111,
          gname: '海尔'
      }, {
          id: 112,
          gname: '美的'
      }, ]
  }, {
      id: 12,
      gname: '洗衣机'
  }]
}, {
  id: 2,
  name: '服饰'
}];
// 我们想要做输入id号,就可以返回的数据对象
// 1. 利用 forEach 去遍历里面的每一个对象
function getID(json, id) {
  var o = {};
  json.forEach(function(item) {
      // console.log(item); // 2个数组元素
      if (item.id == id) {
          // console.log(item);
          o = item;
          // 2. 我们想要得里层的数据 11 12 可以利用递归函数
          // 里面应该有goods这个数组并且数组的长度不为 0 
      } else if (item.goods && item.goods.length > 0) {
          o = getID(item.goods, id);
      }

  });
  return o;
}
console.log(getID(data, 1));
console.log(getID(data, 2));
console.log(getID(data, 11));
console.log(getID(data, 12));
console.log(getID(data, 111));

// { id: 1,
//   name: '家电',
//   goods:
//    [ { id: 11, gname: '冰箱', goods: [Array] },
//      { id: 12, gname: '洗衣机' } ] }
// { id: 2, name: '服饰' }
// { id: 11,
//   gname: '冰箱',
//   goods: [ { id: 111, gname: '海尔' }, { id: 112, gname: '美的' } ] }
// { id: 12, gname: '洗衣机' }
// { id: 111, gname: '海尔' }