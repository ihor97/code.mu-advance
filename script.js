/*
Прокрутим элемент до самого низа:




*/
let elem = document.querySelector('#elem');
elem.scrollTop = elem.scrollHeight - elem.clientHeight;
