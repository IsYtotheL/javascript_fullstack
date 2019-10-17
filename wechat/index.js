var parent =document.getElementById('content-items')
var send=document.getElementById('send')
send.addEventListener('click', function(){
    /*var html= $(                '<li class="content-item">'+
    '<div class="pic">'+
        '<img src="https://puui.qpic.cn/media_img/0/16607691527210690/0">'+
 ' </div>'+
   ' <div class="message">'+
        '<p class="name">蓝忘机</p>'+
        '<p class="detail">你也不愧是魏婴</p>'+
    '</div>'+
'</li>')
html.appendTo(parent)*/
    console.log(666)

var li=document.createElement('li')
li.setAttribute('class','content-item')
console.log(li)
var divPic=document.createElement('div')
divPic.setAttribute('class','pic')
li.appendChild(divPic)
var img=document.createElement('img')
img.setAttribute('src',"https://5b0988e595225.cdn.sohucs.com/images/20190410/89300cc29060402fa9d689bc278c3b56.jpeg")
divPic.appendChild(img)
var message=document.createElement('div')
message.setAttribute('class','message')
li.appendChild(message)

var p1=document.createElement('p')
p1.setAttribute('class','name')
var p1Text=document.createTextNode('江厌离')
p1.appendChild(p1Text)
message.appendChild(p1)

var p2=document.createElement('p')
p2.setAttribute('class','detail')
var p2Text=document.createTextNode('阿羡')
p2.appendChild(p2Text)
message.appendChild(p2)

//console.log(li)
parent.appendChild(li)
})
