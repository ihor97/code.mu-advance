/*
В свойстве size содержится размер коллекции:
console.log(map.size);

Проверить наличие ключа в коллекции можно с помощью метода has:
console.log(map.has(arr1));

Удалить элемент из коллекции можно с помощью метода delete:
map.delete(arr1);

Очистить всю коллекцию можно с помощью метода clear:
map.clear();
*/ 
let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];

map.set(arr1, 'data1');
map.set(arr2, 'data2');

// Можно отделить ключи и значения с помощью деструктуризации:

for (let [key, elem] of map) {
	console.log(key);
	console.log(elem);
}