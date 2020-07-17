let arr = new Array() 
console.log(arr.__proto__.__proto__) // {}对象
console.log(arr.__proto__) // []
console.log(arr.__proto__.__proto__.__proto__) //null
var fn = function () {

}
console.log(fn.prototype)
// {constructor: ƒ}
// constructor: ƒ ()
// __proto__: Object