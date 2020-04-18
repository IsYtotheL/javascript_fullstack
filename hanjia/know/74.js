function identify () {
  return this.name.toUpperCase();
}

function speak () {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting); 
}

var me = {
  name: "Kyle"
};
var you = {
  name: "Reader"
};
//identify(me);
identify.call(me);
identify.call(you);
speak.call(me);
speak.call(you);


function identify1(context) {
  return context.name.toUpperCase();
}
function speak1(context) {
  var greeting  = "Hello,I'm " + identify1 (context);
  console.log(greeting);
}
identify1(you);
speak1(me);