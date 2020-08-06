
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const {resolve} = require('path')
module.exports = {
  entry: './src/index.js',
  output:{
    filename:'built.js',
    path:resolve(__dirname,'build')
  },
  module:{
    rules:[
      {
         test: /\.less$/,
         use:['css-loader','style-loader','less-loader']
      },
      {
        test: /\.css$/,
        use:['css-loader','style-loader']
     },
     {
      //  处理图片资源
      test: /\.(jpg|png|gif)$/,
      use:'url-loader',
      options:{
        limit: 8 * 1024,
        name: '[hash:10].[ext]',
        // 关闭es6模块化
        esModule:false
      }
   },
   {
    //  处理html中img资源
    test: /\.html$/,
    use:'html-loader'
   },
   {
    //  处理其他资源
     exclude:/\.(html|js|css|less|jeg|png|gif)/,
     loader:'file-loader',
     options:{
       name:'[hash:10].[ext]'
     }
   }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode:'development',
  devServer:{
    contentBase:resolve(__dirname,'build'),
    compress:true,
    port:3000,
    open:true
  }
}