- 无代码风格
- 无分号
   + `(`
   + `[`
   + `
   + 最好前面补分号，避免一些问题
   + <<编写可维护的JavaScript>>
   + 不仅是功能，还要写的漂亮
- 服务端渲染
 + 说白了就是在服务端使用模板引擎
 + 模板引擎最早诞生于服务端，后来才发展到前端
 

 - 服务端渲染和客户端渲染
   + 客户端渲染不利于SEO搜索引擎优化
   + 服务端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的
   + 所以你会发现真正的网站既不是纯异步也不是纯服务端渲染出来的
   + 而是两者结合来做的
   + 例如京东的商品列表就采用的是服务端渲染，目的是为了SEO搜索引擎优化
   + 而它的商品评论列表为了用户体验，而且也不需要 SEO 优化，所以采用客户端渲染
   https://www.cnblogs.com/muzishijie/p/11198315.html
   https://blog.csdn.net/wuhuimin521/article/details/79929834

   ## 知识点
   - 模块系统
    + 核心模块
    + 第三方模块
    + 自己写的模块
   - npm
   - package.json
   - Express
    + 第三方 web 开发框架
    + 高度封装了 http 模块
    + 更加专注于业务，而非底层细节
    + 知其所以然
   - 增删改查 
    + 使用文件来保存数据（锻炼异步编码）
 - MongoDB
  + （所有方法都封装好了）

+ art-template 和 jQuery 一毛钱关系都没有
+ each 是art-template 的模板语法，专属的
+ {{each 数组}}
+ <li>{{$value}}</li>
+ {{/each}} 这是art-template 模板引擎支持的语法，只能在模板字符串中使用
+ $.each(数组，function)
+ $('div').each(function)一般用于遍历jQuery选择器选择到的伪数组实例对象
+ forEach 是EcmaScript 5中的一个遍历函数，是JavaScript 原生支持的遍历方法 可以遍历任何被遍历的对象
+ jQuery 的 each 方法 和 forEach 几乎一致
+ 由于 forEach 是 EcmaScript 5 中的，所以低版本浏览器不支持
