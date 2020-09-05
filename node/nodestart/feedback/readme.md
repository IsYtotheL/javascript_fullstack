127.0.0.1:3000/pinglun?name=饶宇玲&message=王一博王一博王一博
上面这个url太长了，我们需要把他缩短
解决：
在cmd: url.parse('http://127.0.0.1:3000/pinglun?name=%E7%9A%84.....')  //中文编码后的结果
详情看图片urlParse.jpg
   