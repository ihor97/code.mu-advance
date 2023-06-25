/*
Свойства, заданные в CSS файле, можно прочитать
 с помощью специальной функции getComputedStyles.

 В результате мы получим объект, содержащий значения CSS свойств для 
 нашего элемента. Давайте с его помощью прочитаем, например, цвет:


*/
let elem = document.querySelector('#elem');
let computedStyle = getComputedStyle(elem);
console.log(computedStyle);