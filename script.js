/*
Пусть пользователь кликает на эти абзацы в произвольном порядке.
 Давайте сделаем так, чтобы по нажатию на кнопку в конец каждого абзаца, 
 на который был совершен клик,
 был добавлен восклицательный знак. Решим задачу через Set.
*/ 

let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');


let set = new Set;

for (let elem of elems) {
	elem.addEventListener('click', function() {
		set.add(this);
	});
}

/*
Из-за того, что мы используем коллекцию Set повторный клик на абзац не
 будет приводить к добавлению дубля абзаца.

Давайте теперь по клику на кнопку переберем содержимое 
нашей коллекции и каждому абзацу в конец добавим восклицательный знак:

*/ 
button.addEventListener('click', function() {
	for (let elem of set) {
		elem.textContent = elem.textContent + '!';
	}
});