function foo() {
  console.log("foo");
}

var someFoo = foo;

var myObject = {
  someFoo: foo
};

console.log(foo)
someFoo;
myObject.someFoo;



var myArray = ["foo",42,"bar"];
myArray.length;
myArray[0];
myArray[2];