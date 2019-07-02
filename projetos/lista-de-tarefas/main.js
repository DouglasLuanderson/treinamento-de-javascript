let form = document.querySelector("form");
let cards = document.createElement("ul");
let list = []

form.elements.color.value = '#67ace2'

// 
form.addEventListener("submit", event => {	
	event.preventDefault();

	list.push({
		title: form.elements.title.value,
		description: form.elements.description.value,
		category: form.elements.category.value,
		color: form.elements.color.value,
		tags: form.elements.tags.value,
		status: form.elements.status.value,
	})

	// é necessário informar que o input inicia vazio, assim quando enviar o form e criar o post it o input fica vazio. 
		form.elements.title.value = ''
		form.elements.description.value = ''
		form.elements.category.value = ''	
		form.elements.tags.value = ''
		form.elements.status.value = ''

	render()
});


function render() {
	// essa parte do while funciona para quando adicionar o item, ele limpa os filhos anterios para não se repitir
	while (cards.firstChild) {
		cards.removeChild(cards.firstChild);
	}
	

	list.map((item) => {
		let card = document.createElement("li");

		// o renderItem criou no html e acrescentou a busca pelo name do input no html
		let title = renderItem("h2", item.title);
		let description = renderItem("p", item.description);
		let category = renderItem("p", item.category);
		let color = renderItem("p", item.color);
		let tags = renderItem("p", item.tags);
		let status = renderItem("p", item.status);
		// a variável let esta sendo criada de acordo com o nome de cada input criado, para depois renderizar o item para o cliente

		// o appendChild precisa ser criado dentro do card para mostra na tela uma lista em baixo da outra
		card.appendChild(title);
		card.appendChild(description);
		card.appendChild(category);
		card.appendChild(color);
		card.appendChild(tags);
		card.appendChild(status);

		//  o card.style.backgroundColor foi criado para inserir um background apenas no input de cor
		card.style.backgroundColor = item.color;

		cards.appendChild(card);
	
	});
};
	
// A função rednderItem foi criada para pegar o elemento e o texto dentro de cada label do form
function renderItem (element, text) {
	let elementList = document.createElement(element);
	let textList = document.createTextNode(text);

	elementList.appendChild(textList)

	return elementList;
	// é necessário retornar o elemento da lista, pois se retornar apenas o texto ele não vai respeitar a formatção correta do post it

}

document.body.appendChild(cards);
// Se o js não pegar a body e informar que deve mostrar o filho do meu card(ul), quando eu enviar meu form o post it não vai aparecer na tela

	

