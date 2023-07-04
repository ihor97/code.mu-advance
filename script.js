/*
Давайте добавим в объект функцию, которая будет выполнять некоторую полезную операцию. Например, будет находить сумму элементов объекта.
*/ 
let obj = {a: 1, b: 2, c: 3};

let sym = Symbol();
obj[sym] = function() {
	console.log(this); // {a: 1, b: 2, c: 3} 
};
obj[sym] = function() {
	let sum = 0;
	
	for (let key in this) {
		sum += this[key];
	}
	
	return sum;
};
let sum = obj[sym]();
console.log(sum); // выведет 6