/*
С помощью метода Symbol.for можно создавать символы с именем. Эти символы будут сохранены в глобальный реестр 
символов и доступ к ним можно будет получить из любого места кода.
*/ 
function func1() {
	let sym = Symbol.for('test');
	return sym;
}

function func2() {
	let sym = Symbol.for('test');
	return sym;
}

let sym1 = func1();
let sym2 = func2();

console.log(sym1 === sym2); // true