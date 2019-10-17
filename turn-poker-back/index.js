const wrap = document.getElementById('wrap');

let images = [
  './image/f1.jpg',
  './image/f2.jpg',
  './image/f3.jpg',
  './image/f4.jpg',
  './image/f.jpg',
  './image/lwj.jpg',
  './image/f1.jpg',
  './image/f2.jpg',
  './image/f3.jpg',
  './image/f4.jpg',
  './image/f.jpg',
  './image/lwj.jpg',
]
let count = 0;
images.sort((a, b) => 0.5 - Math.random());

init();
const allImg = document
.querySelectorAll('#wrap img');
function init() {
  for (let i = 0; i < 12; i ++) {
    // <img src="" class="" id="" />
    let img = document.createElement('img');
    img.src="./image/h.jpg";
    img.onclick = function() {
      changeImage(img, i);
    }
    wrap.appendChild(img);
  }
}
let firstCard = null;
let firstId = null;
function changeImage(imgNode, i) {
  // imgNode.src = './image/h1.jpg';
  if (count === 0) {
    firstCard = images[i];
    firstId = i;
    imgNode.src = images[i];
    imgNode.classList.add('rotate-animation');
  }
  // console.log(count, firstCard);
  if (count === 1 && i === firstId) return;
  if (count === 1) {
    // 翻第二张
    imgNode.src = images[i];
    imgNode.classList.add('rotate-animation');
    setTimeout(() => {
    // start
    if (firstCard === images[i]) {
      // 1
      wrap.removeChild(allImg[firstId]);
      wrap.removeChild(allImg[i]);
    } else {
      // 2
      allImg[firstId].className = '';
      allImg[firstId].src = './image/h.jpg';
      allImg[i].className = '';
      allImg[i].src = './image/h.jpg';
    }
    count = 0;
    firstId = null;
    firstCard = null;
    // end
  }, 1100);
  }
  count ++;
}
var obj = { a: 1 };
// console.log(obj.b);
// undefined.c
// console.log(obj.b.c);

var arr = [1, 2, 3, 4, 5];
// 生序
// arr.sort((a, b) => a - b);
// 降序
// arr.sort((a, b) => b - a);
// 乱序 随机排序 伪随机 不是真正的随机
arr.sort((a, b) => 0.5 - Math.random());
console.log(arr);