/*
Ширина полосы прокрутки зависит от браузера.
 Мы можем получить значение этой ширины. 
Для этого создадим элемент с прокруткой, но без границ и внутренних отступов:





*/
let div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
document.body.append(div);

let scrollWidth = div.offsetWidth 
	- div.clientWidth;
console.log(scrollWidth);