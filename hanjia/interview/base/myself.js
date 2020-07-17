function deepClone(obj) {
  let copy = obj instanceof Array ? [] : {}
  for (let i in obj) {
    if (obj.hasOwnProperyty(i)) {
      copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return copy
}
let test = {
  a: 1,
  b: {
    c:2,
    d:3
  }
}
let res = deepClone(test)
test.a = 10
test.b.c = 20
console.log(res) //{a:1,b:{c:2,d:3}}