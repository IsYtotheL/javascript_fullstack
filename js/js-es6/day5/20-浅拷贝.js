  // 浅拷贝只是拷贝一层, 更深层次对象级别的只拷贝引用.
        // 深拷贝拷贝多层, 每一级别的数据都会拷贝.
        var obj = {
          id: 1,
          name: 'andy',
          msg: {
              age: 18
          }
      };
      var o = {};
      // for (var k in obj) {
      //     // k 是属性名   obj[k] 属性值
      //     o[k] = obj[k];
      // }
      // console.log(o); //{ id: 1, name: 'andy', msg: { age: 18 } }
      // o.msg.age = 20; //改变o  obj也变了
      // console.log(obj);//{ id: 1, name: 'andy', msg: { age: 20 } }

      // console.log('--------------');
      Object.assign(o, obj);
      console.log(o);//{ id: 1, name: 'andy', msg: { age: 18 } }
      o.msg.age = 20;
      console.log(obj);//{ id: 1, name: 'andy', msg: { age: 20 } }