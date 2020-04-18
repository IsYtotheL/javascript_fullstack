function foo(num) {
  console.log("foo:" + num);
  this.count++;
  foo.val++;
}

foo.count = 0;
foo.val =0;
var i;

for(i = 0; i<10; i++) {
  if (i > 5) {
    foo(i);
  }
}
console.log(foo.count);
console.log(foo.val);



function fooo(nums) {
  console.log("fooo:" + nums);
  data.counts++;
}

var data = {
  counts: 0
};
var j;

for(j = 0; j< 10; j++) {
  if(j < 5) {
    fooo(j);
  }

}
console.log(data.counts)