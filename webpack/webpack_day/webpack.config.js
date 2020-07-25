const path = require('path')
module.exports = {
  entry: "./index.js", //指定打包的入口
  output: { //指定打包后的资源位置
    // 公共路径设置
    // publicPath:"",  “http://cdn.baidu.com”
    path: path.resolve(__dirname, './build'),
    filename: "index.js",
  },

 module:{
   // 遇到不认识的模块，就在这里找loader
   rules:[
     {
      test: /\.jpeg?$/,
      use: {
        loader:"file-loader"
      }
     }
   ]
 }
}