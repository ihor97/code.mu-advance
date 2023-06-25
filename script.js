/*
Распахнем элемент на всю высоту:





*/
let elem = document.querySelector('#elem');
elem.style.height = elem.scrollHeight 
	+ 'px'; 
    elem.style.width = elem.scrollWidth 
	+ 'px';