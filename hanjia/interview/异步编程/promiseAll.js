// var A = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve(1)
//     console.log('A')
//   },1000);
// })
function A () {
return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(1)
       console.log('A')
     },1000);
   })
  }


function B () {
  return new Promise((resolve,reject) => {
    
  setTimeout(() => {
    resolve(2)
    console.log('B')
  },500);
})
}
function C () {
  return new Promise((resolve,reject) => {
  
  setTimeout(() => {
    resolve(3)
    console.log('C')
  },1500);
})
}

function name() {
  console.log('蜗牛')
}
// A().then(B).then(C).then(name)


Promise.all([A(),B(),C()]).then(name)  // B A C 蜗牛

//Promise.race([A(),B(),C()]).then(name) //B 蜗牛 A C







let p = new Promise((resolve,reject) => {

})