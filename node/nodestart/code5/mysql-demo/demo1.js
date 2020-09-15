var mysql      = require('mysql');
// 1.创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'users'
});
//  2.连接数据库
connection.connect();
//  3.执行数据操作
// connection.query('SELECT * FROM `users`', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });
connection.query('INSERT INTO user VALUES(null,"admin","123456")', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
connection.query('SELECT * FROM `user`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
//  4.关闭连接
connection.end();