/*
Коллекции Map представляют собой объекты, 
в которых в качестве ключей могут выступать как примитивы, так и объекты.
*/ 
let map = new Map;
let arr1 = [1, 2];
let arr2 = [3, 4];
map.set(arr1, 'data1');
map.set(arr2, 'data2');
console.log(map.get(arr1));
console.log(map.get(arr2));