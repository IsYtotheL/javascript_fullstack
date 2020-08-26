//在Node中，采用 EcmaScript 进行编码
//在node中没有BOM和DOM
//和浏览器中的 JavaScript 不一样
console.log(window) // ReferenceError: window is not defined
console.log(document) //ReferenceError: document is not defined
console.log(global)
//Object [global] {
//   ...
// }