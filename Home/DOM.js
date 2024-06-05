var section = document.querySelector('.deal-every-day');
var div1 = document.createElement('div');
div1.classList.add("header");
var img = document.createElement('img');
img.src = "image/Top-Deal-Soc-DMX-Desktop-1200x110.jpg";
div1.appendChild(img);
var div2 = document.createElement('div')
div2.classList.add("content-deal")
var div3 = document.createElement('div')
div3.id="productView"
div3.classList.add("row")
section.appendChild(div1);
section.appendChild(div2);
div2.appendChild(div3);
var section = document.querySelector('.deal-week');
var div1 = document.createElement('div');
div1.classList.add("header");
var h1 = document.createElement('h1');
h1.textContent = 'TUẦN LỄ GIA DỤNG';
div1.appendChild(h1);
var div2 = document.createElement('div');
div2.classList.add("content-deal");
var div3 = document.createElement('div');
div3.id="sanphamall";
div3.classList.add("row");
section.appendChild(div1);
section.appendChild(div2);
div2.appendChild(div3);