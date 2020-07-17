https://www.jianshu.com/p/54cc04190252
# 浏览器的缓存机制
<!-- 跟性能优化有关的 -->
缓存是一种简单高效的优化方式，他可以显著减少网络传输所带来的损耗

# 缓存位置
1. Service Worker
2. Memory Cache
3. Disk Cache
4. Push Cache
5. 网络请求

Service Worker:
 的缓存与浏览器其他内建的缓存机制是不同的，它可以让我们 自由控制 缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的

 当Service Worker 没有命中缓存的时候，我们需要调用fetch函数(往浏览器的内存卡中)获取数据，但是不管我们是从Memory Cache 中还是从网络请求中获取的数据，浏览器会显示我们是从 Service Worker 中获取的。


 Memory Cache:
 内存缓存，读取缓存中的数据肯定是比读取磁盘要快的，但是内存缓存持续性很短，会随着进程的释放而释放。一旦我们关闭tab页面，内存中的缓存也就被释放了

 问：既然内存缓存这么高效，那么我们可以把数据全都存在内存中吗？
 不能！内存缓存空间大小是有限制的


 Disk Cache:
 也就是存储在硬盘中的缓存，读取速度慢一点，但是什么都能存到磁盘中。它比 Memory Cache 胜在容量和存储时效性。

 push Cache:
 Push Cache 是HTTP/2中的内容，当以上三种缓存中都没有命中的时候他才会被使用。
 并且它的缓存时间也很短暂，只在会话(Session)中存在，一旦结束会话，就被释放

# 缓存策略
强缓存 和 协商缓存，缓存策略都是通过 HTTP Header 来实现的。

  - 强缓存
    可以通过设置两种HTTP Header来实现：Expires 和 Cache-Control
    强缓存表示在缓存期间不需要请求，state code 为 200

    Expires:Wed, 22 May 2020 08:24 :00 GMT
      Expires 是 HTTP/1的产物，表示资源会在 Wed, 22 May 2020 08:24 :00 GMT后过期，需要再次请求，并且Expires 受限于本地时间，如果修改本地时间可能会造成缓存失效。
    Cache-Conrol:max-age=30
      出现于HTTP/1.1,优先级高于Expires.该属性表示资源会在30s后过期，需要再次请求
  - 协商缓存
    如果缓存过期了，就要发起请求来验证资源是否更新。协商缓存可以通过设置两种HTTP Header 来实现： Last-Modifed 和 Etag.
    Last-Modifed 和 If-Modified-Since

    Last-Modifed表示本地文件 最后修改日期，If-Modified-Since会将
    Last-Modifed的值会发送给服务器，询问服务器在该日期后资源是否有更新，有的更新的话将新的资源返回，否则返回304.

    Last-Modifed缺点：
      1. 如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成Las-Modify被修改，服务端不能命中缓存导致发送相同的资源
      2. 因为Last-Modify 只能以秒计时，如果在不可感知的事件内修改完成文件，那么服务器会认为任务资源还是命中了，不会返回正确的资源
  因为这两个缺陷的存在，所以有了ETag

  ETag 和 If-None-Match
    Etag类似文件指纹，IF-None-Match 会将 Etag的值 发送给服务器，询问服务器在该资源是否有更新，有更新的话将新的资源返回。

- 如果在项目中什么缓存策略都没用，那么浏览器会怎样？
对于这种情况，浏览器会采用一个启发式算法，通常会取响应头中的Date减去
Last-Modify值的10%作为缓存时间

# 实际场景应用缓存策略
1.频繁变动的资源：Cache-Control:no-cache(不帮你缓存)
2.代码文件:一般文件都做了hash处理，只有修改带啦才有新的文件产生，
Cache-Control:mx-age=315360000


# 实际场景应用缓存策略