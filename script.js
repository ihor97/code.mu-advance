/*
Через свойство style можно прочитать только стили, заданные через атрибут style. Это значит
, что стили заданные в CSS файле, прочитать нельзя.
*/
let elem = document.querySelector('#elem');
console.log(elem.style.color); // выведет ''
