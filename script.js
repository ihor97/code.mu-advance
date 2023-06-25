/*
Представим себе, что мы хотим увеличить ширину 
на некоторое значение. Для этого нам сначала нужно 
прочитать ширину, затем извлечь число, прибавить к
 нему нужное значение,
 добавить 'px' и только потом записать обратно:

*/
let elem=document.querySelector('#elem')
let widthPx = elem.style.width;
let widthNm = parseInt(width);
elem.style.width = (widthNm + 30) + 'px';