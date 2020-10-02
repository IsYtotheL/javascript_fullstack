// 获得Date总的毫秒数（时间戳），不是当前时间的毫秒数 而是距离1970年1月1号过了多少毫秒数
// 1.通过valueOf() getTime()
var date = new Date();
console.log(date.valueOf());
console.log(date.getTime());
// 2.简单的写法（最常用的写法）
var date1 = +new Date();//就是返回的总的毫秒数
console.log(date1);
// 3.H5新增的  获得总毫秒数
console.log(Date.now());
// 1601643652731
// 1601643652731
// 1601643652736
// 1601643652736



// eg.倒计时
function countDown(time) {
  var nowTime = +new Date();
  var inputTime = + new Date(time);
  var times = (inputTime - nowTime) /1000;
  var d = parseInt(times/60/60/24);
  var h = parseInt(times/60/60%24);
  var m = parseInt(times/60%60);
  var s = parseInt(times%60);
  return d+'天'+h + '时'+m+'分'+s+'秒'
}
console.log(countDown('2020-10-5 00:00:00'));
var date = new Date();
console.log(date)
// 0天2时29分5秒
// 2020-10-02T13:30:54.055Z
