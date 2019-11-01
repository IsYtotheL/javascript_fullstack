let listener =[
    () => {console.log(1)},
    () => {console.log(2)},
    1,
    2,
    3
];
const subPub = {
    // 'price': [
    //      () => { console.log(3)},
    //      () => { console.log(4)},
       
    //     ]
    'price': [],
    'paraer':[]
}
//price 对应的方法执行一遍
for(let i = 0; i < subPub.price.length; i++) {
    console.log('---',subPub.price[i]);
    subPub.price[i]();
}
function foo() {
    console.log('foo');
}
//foo: [ foo ]
//在 subPub上面添加一个 value 为数组的 key (foo)
//把foo 放到数组去
subPub.foo = [foo];
console.log(subPub);
class Events {
    constructor() {
        // this.listener = [];
        this.listener = {};
    }
    on(key, fn) {//订阅
        // this.listener[key] = [fn]
        if(!this.listener[key]) {
            this.listener[key] = [];
        }
        this.listener[key].push(fn);
        // this.listener.push(fn);
    }
    emit(key) {//执行
        // console.log(this.listener);
        // for (let fn of this.listener) {
        //     fn()
        // }
        for(let i = 0; i < this.listener[key].length; i++) {
            console.log('---',this.listener[key][i]);
            this.listener[key][i]();
        }
    }
}
const ev = new Events();
ev.on('abc',() => {console.log(1) })
ev.on('abc',() => { console.log(2) }) 
ev.emit('abc');//执行的