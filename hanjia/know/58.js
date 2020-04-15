// function foo () {
//   console.log(a); //2
// }

// function bar () {
//   var a = 3;
//   foo();
// }

// var a = 2;
// bar();

// {
//   let b = 2;
//   console.log(b);//2
// }
// console.log(b) // ReferenceError


{
  try {
    throw underfined;
  } catch (c) {
    c = 6;
    console.log(c)
  }
}

console.log(c)