- 可查看官方文档
- npm init -y
- 会出现package.json
- webpack当我们不使用任何第三方框架去做开发的时候，让我们的项目实现自动化构建
-  npm i webpack webpack-cli --save-dev
- npx webpack index.js
- webpack 模块打包器  只支持 js 模块的打包
- 这样太弱了  所以我们为您需要添加配置文件  让webpack变强大
- 有了配置文件后(webpack.config.js)后 可以直接用npx webpack 打包
-   把package.json "test": "echo \"Error: no test specified\" && exit 1"  改成"bundle": "webpack"  npm run bundle
- npm i file-loader -D