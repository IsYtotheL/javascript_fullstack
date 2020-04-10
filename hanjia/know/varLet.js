 for ( var i = 0; i < 3; i++) {
   console.log('i '+i); // 0 1 2
 }
 console.log('i = ' +i )  // 3

 for ( let j = 0; j < 2; j++) {
   console.log('j '+j); // 0 1
 }
 //console.log (j + 1) // ReferenceError: j is not defined


 var foo = true
 if(foo) {
   var bar = 3 * foo;
  // bar = something(bar);
   console.log(bar);// 3
 }
 console.log(bar); // 3


 var fo = true
 if(fo) {
   let bal = 2 * fo;
  // bar = something(bar);
   console.log(bal);// 2
 }
 //console.log(bal); // bal is not defined   

 var a = true;
 if (a) {
   var b = 11;
   const d = 13;
   b = 14;
   d = 5; //TypeError: Assignment to constant variable
  console.log(d); 
 }

 console.log(b);//14
