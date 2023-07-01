/*
Давайте сделаем так, чтобы по клику на каждый абзац ему в конец записывался 
его порядковый номер в списке абзацев. Решим задачу через Map.
*/ 

let map = new Map()

let elems=document.querySelectorAll('p')
let  i=1
for (const elem of elems) {
	map.set(elem,i)
	i++
}

elems.forEach(e=>{
	e.addEventListener('click',function (e) {
		// цікаве діставання значення по обєкту
		this.textContent+=map.get(this)
	})
})