# 2020春招名企就业前端工程师考点解析
## 深入理解node.js 中的进程与线程

- 前端的角度 来看待进程与线程
- node 进程 子进度 cluster 多核cpu的利用 GO
- pm2 线上node 运行进程管理
- docker 容器
- k8s


1. 从前端角度开始
node.js是单线程吗？
是 GG
js 是单线程 html, css , js, vue, jsx, node, koa
java 主线程 ，开辟新的线程的概念
基于事件机制event loop 回调 另外一个角度解决了能力