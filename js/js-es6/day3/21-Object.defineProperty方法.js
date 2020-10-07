 

// Object.defineProperty() 方法会直接在一个对象上定义一个新属性
// ，或者修改一个对象的现有属性，并返回此对象。

 // 语法
// Object.defineProperty(obj, prop, descriptor)
// 参数
// obj
// 要定义属性的对象。
// prop
// 要定义或修改的属性的名称或 Symbol 。
// descriptor
// 要定义或修改的属性描述符。
 
 // Object.defineProperty() 定义新属性或修改原有的属性


//  writable
// 当且仅当该属性的 writable 键值为 true 时，属性的值，
// 也就是上面的 value，才能被赋值运算符改变。
// 默认为 false。

// enumerable
// 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。
// 默认为 false。

// 1. 以前的对象添加和修改属性的方式
// obj.num = 1000;
// obj.price = 99;
// console.log(obj);
// 2. Object.defineProperty() 定义新属性或修改原有的属性
 var obj = {
  id: 1,
  pname: '小米',
  price: 1999
};

Object.defineProperty(obj, 'num', {
  value: 1000,
  enumerable: true
});
console.log(obj);//{ id: 1, pname: '小米', price: 1999, num: 1000 }
Object.defineProperty(obj, 'price', {
  value: 9.9
});
console.log(obj);//{ id: 1, pname: '小米', price: 9.9, num: 1000 }
Object.defineProperty(obj, 'id', {
  // 如果值为false 不允许修改这个属性值 默认值也是false
  writable: false,
});
obj.id = 2;
console.log(obj);//{ id: 1, pname: '小米', price: 9.9, num: 1000 }
Object.defineProperty(obj, 'address', {
  value: '中国山东蓝翔技校xx单元',
  // 如果只为false 不允许修改这个属性值 默认值也是false
  writable: false,
  // enumerable 如果值为false 则不允许遍历, 默认的值是 false
  enumerable: false,
  // configurable 如果为false 则不允许删除这个属性 不允许在修改第三个参数里面的特性 默认为false
  configurable: false
});
console.log(obj);//{ id: 1, pname: '小米', price: 9.9, num: 1000 }
console.log(Object.keys(obj)); //[ 'id', 'pname', 'price', 'num' ]
delete obj.address;
console.log(obj);//{ id: 1, pname: '小米', price: 9.9, num: 1000 }
delete obj.pname;
console.log(obj);//{ id: 1, price: 9.9, num: 1000 }
// Object.defineProperty(obj, 'address', {
//   value: '中国山东蓝翔技校xx单元',
//   // 如果值为false 不允许修改这个属性值 默认值也是false
//   writable: true,
//   // enumerable 如果值为false 则不允许遍历, 默认的值是 false
//   enumerable: true,
//   // configurable 如果为false 则不允许删除这个属性 默认为false
//   configurable: true
// });
console.log(obj.address);//中国山东蓝翔技校xx单元