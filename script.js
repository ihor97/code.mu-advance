/*
Имея переменную с символом, можно получить его имя в глобальном реестре. Это делается с помощью метода Symbol.keyFor. 
Давайте попробуем. Создадим символ с именем:
*/ 
let sym = Symbol.for('test');

let key = Symbol.keyFor(sym);
console.log(key); // выведет 'test'