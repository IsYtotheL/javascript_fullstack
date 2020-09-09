1.require 方法加载规则
- 深入浅出Node.js(三),深入Node.js的模块机制
- 核心模块
 + 模块名
- 第三方模块
 + 模块名
- 用户自己写的
 + 路径

 blog 
    a 
      node_modules
        srt-template
      foo.js

    b
      ../a/foo.js
      a中的第三方包是不能通过 require('art-template') 方式来加载
      require('../a/node_mudules/art-template/index.js)

2.npm(node package manager)
- npm install template jquery -bootstrap 一次装三个
- package.json 包的说明书
- npm install --save art-template
- --save会保存dependencies 依赖
2.1 npm网站
2.2 npm 命令行工具
npm 的第二层含义就是一个命令行工具，只要你安装了node 就已经安装了npm
npm 也有版本这个概念
可以通过在命令行输入:
npm --version
升级npm:(自己升级自己)
npm install --global npm
2.3常用命令
- npm init
  + npm init-y 可以跳过向导，快速生成
- npm install
  + 一次性把dependencies 选项中的依赖项全都安装
  + npm i 包名
- npm install 包名
  + 只下载
- npm install --save包名
  + 下载并且保存依赖项(package.json文件中的dependencies选项)
- npm uninstall 包名
  + 只删除，如果有依赖项会依然保存
  + npm run 包名
- npm uninstall --save包名
  + 删除的同时也会把依赖信息也去除
  + npm un-S 包名
- npm help
  + 查看使用帮助
- npm 命令 --help
  + 查看指定命令的使用帮助
  + 例如我忘记了 uninstall 命令的简写了，这个时候，可以输入npm unstall --help 来查看使用帮助。
2.4 解决 npm 被墙的问题
npm 存储包文件的服务器在国外，有时候会被撞，速度很慢，所以我们需要解决这个问题
http://npm.taobao.org/淘宝的开发团队把npm 在国内做了一个备份
安装淘宝的cnpm:
 # 在任意的目录执行都可以  --gloable 表示安装到全局，而不是某个目录
 # npm install --gloable cnpm
 接下来安装包的时候把之前的npm换成cnpm

3.package.json
- 我们建议每个项目都要有一个 package.json文件（包描述文件，就像产品的说明书一样）
- 这个文件可以通过npm init 的方式自动初始化出
- npm init 出错 no such file...  解决：手动建一个·package.json文件
- 对于咱们目前来讲，最有用的是那个dependencies 选项，可以用来帮我们保存第三方包的依赖信息
- 如果你的 node_modules 删除了也不用担心，我们只需要:npm install 就会自动把 package.json 中的dependencies 中国的所有依赖项都下载回来
- npm i art-template 
- 建议每个项目的根目录下都有一个package.json文件
- 建议执行npm install 包名的时候都加上 --save 这个选项，目的是用来保存依赖项信息
4. Express

