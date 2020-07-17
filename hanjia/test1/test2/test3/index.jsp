<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<link rel="stylesheet" href="../../test2/test4/style.css">
<body>
  <div class="all">
      <div class="ccc" style="height:30px"><img src="../img/menu4.png" style="width:20px; height:20px; display:inline-block; vertical-align:middle">管理菜单</div>
      <div class="aa">

          <a href="c.jsp"><img src="../img/computer.png" width="40px" height="40px">新增</a>
          <a href="d.jsp"><img src="../img/computer.png" width="40px" height="40px">删除</a>
          <a href="e.jsp"><img src="../img/computer.png" width="40px" height="40px">修改</a>
          <a href="f.jsp"><img src="../img/computer.png" width="40px" height="40px">查找</a>
        </div>
        
  </div>
  <div class="b">公司员工管理系统</div>
  <div class="bbb"><img src="../img/computer1.png" width="40px" height="40px" ></div>
  <div class="bar">
    <p>总目录</p>
    <ul>
      <li>子目录1</li>
      <li>子目录2</li>
    </ul>
    <div id="main1" style="color:blue" onclick="document.all.child1.style.display=(document.all.child1.style.display == 'none')?'':'none'">
      <img src="../img/computer6.png" width="40px" height="40px" >+ 主目录1</div>
        <div id="child1" style="display:none" >
        <a href="#">- 子目录1</a> <br>
        <a href="#">- 子目录2</a> <br>
        <a href="#">- 子目录3</a> <br>
        <a href="#">- 子目录4</a>
        </div>
        <div id="main2" style="color:blue" onclick="document.all.child2.style.display=(document.all.child2.style.display == 'none')?'':'none'" >
        + 主目录2 </div>
        <div id="child2" style="display:none">
        <a href="#">- 子目录1</a> <br>
        <a href="#">- 子目录2</a> <br>
        <a href="#">- 子目录3</a>
        </div>
  </div>
  


</body>
</html>