// var strPrimitive = "I am a string";
// typeof strPrimitive;
// strPrimitive instanceof String;


// var strobj = new String('bbb');
// strobj instanceof String;


// var myObject = {
//   a:2
// };
// console.log(myObject.a)
// console.log(myObject["a"])


var prefix = "foo";

var myObject = {
  [prefix + "bar"]:"hello",
  [prefix + "baz"]:"world"
};

console.log(myObject["foobar"])
myObject["foobaz"];

console.log(myObject.foobaz)



