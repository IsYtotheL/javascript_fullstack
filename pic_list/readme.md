- restful web
 一切资源
 DOM + CSS + JS
 URL Universal Resource Location
 http://www.taobao.com/shop/1/good/2
 明确表达 它的资源是什么意思
 npm init - y
 npm install json-server
 npm run
 npm run dev

 - npm init -y 从前端，加入后端
  scripts 执行一些命令
  json-server npm 包
  url 上将我们的json文件向外暴露
  json 资源 restful
  - 语义化的url
  :1314/posts GET文章列表
  :1314/posts/:id(想变化的任何一个)  详情
  GET url 明文访问（新增页面）
  POST 新增数据（提交表单）
  PUT 修改数据
  PATCH 修改数据
  DELETE 删除数据

  url + 谓语动词
  PUT  覆盖
  PATCH 部分修改

  - :8080 live-server web 页面
    ：1314 启动了后端API
    不同的端口代表不哦那个的服务
    前后端  全栈