// const http = require('http')
// const server = http.createServer((req, res) => {
//   res.end('hello world')
// })

// server.listen(3000, () => {
//   console.log('ok')
// })

const koa = require('koa')
const app = new koa()
// ctx代表上下文
const main = ctx => {
  ctx.response.body = 'hello world'
}

app.use(main)
app.listen(3000)