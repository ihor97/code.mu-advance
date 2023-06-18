/*
При указании значений свойств через атрибут style мы должны
 указывать единицы измерения:

 При необходимости мы можем избавиться 
 от единиц измерения с помощью parseInt:

 Если предполагаются дробные значения, 
 можно воспользоваться функцией parseFloat:

*/
elem.style.width = '100px';
let width = elem.style.width;
console.log(width); // выведет '100px';

{
    let width = elem.style.width;
    console.log(parseInt(width));
}

{
    let width = elem.style.width;
    console.log(parseFloat(width));
}