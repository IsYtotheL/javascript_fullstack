// 浏览器执行js简介
// 浏览器分为两部分:渲染引擎和JS引擎
// 渲染引擎：用来解析HTML和CSS,俗称内核，比如chrome浏览器的blink,老版本的webkit
// js引擎：也称为JS解释器，用来读取网页中的JAVAScript 代码，对其处理后运行，比如chrome浏览器的v8

// 浏览器本身并不会执行JS代码，而是通过内置JavaScript引擎（解释器）来执行JS代码。JS引擎执行代码时逐行解释
// 每一句源码（转换为机器语言），然后由计算机去执行，所以JAvascript语言归为脚本语言，会逐行解释执行
