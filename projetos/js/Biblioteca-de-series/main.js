let cards = [];
let temps = [];
let isEditing = undefined;
let form = document.createElement("form");
let ul = document.createElement("ul");
let tempList = document.createElement("ul");
let sectionCard = document.createElement("section");
let inputSerie = document.createElement("input"); 
let inputDescription = document.createElement("input"); 
let inputEpisode =document.createElement("input");
let buttonEpisode = document.createElement("button"); 
let buttonSubmit = document.createElement("button");


function renderItem (){
 
  let label = document.createElement("label");  
  let title = document.createElement("h1");

  inputSerie.setAttribute("placeholder", "Nome da Série");
  inputSerie.setAttribute("required", "true");
  inputDescription.setAttribute("placeholder", "Sinopse da Série");
  inputDescription.setAttribute("required", "true");
  buttonEpisode.setAttribute('onclick', "showAddTemp()")

  buttonEpisode.innerHTML = "Nova Temporada";
  buttonSubmit.innerHTML = "Adicionar Série";  
  title.innerHTML = "Bliblioteca de Séries";

  form.appendChild(label);
  form.appendChild(title);
  form.appendChild(inputSerie);
  form.appendChild(inputDescription);
  form.appendChild(buttonEpisode);   
  form.appendChild(buttonSubmit);
  document.body.appendChild(form);

  renderTemps = () => {
    event.preventDefault();
  
    if (inputEpisode.value !== '') {
      let tempBox = [inputEpisode.value];
  
      temps.push({
        temp: inputEpisode.value,
      });
  
      tempBox.map((item) => {
        
        let tempItem = document.createElement('div');
        let title2 = createTag('span', 'p');
        let deleteTempButton = createTag('button', 'x');
  
        title2.innerHTML = item;
        title2.style.color = "white";
        deleteTempButton.innerHTML = "X"
  
        deleteTempButton.setAttribute('onclick', 'deleteTempAdded()');     
  
        tempList.appendChild(tempItem);
        tempItem.appendChild(title2);      
        tempItem.appendChild(deleteTempButton);
        
        form.appendChild(tempList);
        
        inputEpisode.value = "";
      });
    }  
  }

  buttonSubmit.addEventListener("click", function(){	
    event.preventDefault();

    if (typeof(isEditing) == 'number'){
      editCard();
    }
    else{
      cards.push({
        temps,
        description: inputDescription.value,
        title: inputSerie.value,
      
      })
    }    

    inputSerie.value = "";
    inputDescription.value = "";
    temps = [];
    render();
  });

}

function editCard (){
  cards[isEditing] = {
    description: inputDescription.value,
    title: inputSerie.value,
    temps,
  };

  isEditing = undefined;
  inputSerie.value = "";
  inputDescription.value = "";
  temps = [];
  render()
}

function deletCard(cards, item){
  return cards.filter(function(el){
    return el != item;
  });
}

function deleteTempAdded() {
	event.preventDefault();
	let tempAdded = event.target.parentNode;
	tempAdded.remove();
}
showAddTemp = () => {
  event.preventDefault();
  let addTemp = createTag('button', 'p');
  addTemp.innerHTML = "Add Temporada";

	addTemp.addEventListener('click', function() {
		event.preventDefault();
		renderTemps();
  });
  
	buttonEpisode.style.display = 'none';
	form.appendChild(addTemp);
	form.appendChild(inputEpisode);
}
function createTag (el,txt){
  let listItem = document.createElement(el);
  let itemText = document.createElement(txt);

  listItem.appendChild(itemText)

  return listItem;
}

function render(){
  while (ul.firstChild){
    ul.removeChild(ul.firstChild);
  }

  cards.map((item, index) => {
    
    let li = document.createElement("li");
    let serieItem = document.createElement('p');
    let elementSerieTitle = document.createElement("p");
    elementSerieTitle.innerHTML = item.title;
    // let elementSerieDescription = document.createTextNode(item.title);
    let elementInfoTitle = document.createElement("p");
    elementInfoTitle.innerHTML = item.description;
    // let elementInfoDescription = document.createTextNode(item.description);    
    let deletList = document.createElement("button");
    let editList = document.createElement("button");

    deletList.innerHTML = "Excluir";
    editList.innerHTML = "Editar";

    li.appendChild(elementSerieTitle)
    li.appendChild(elementInfoTitle)

    item.temps.map((temp => {
      let temporada = createTag('p', 'span');
      temporada.innerHTML = temp.temp

      serieItem.appendChild(temporada);      
      li.appendChild(serieItem)
		}));

		tempList.innerHTML = '';
    temps = [];

    li.appendChild(deletList)
    li.appendChild(editList)
    ul.appendChild(li)
   
    deletList.addEventListener('click', function(){
      cards = deletCard(cards, item);
      render()
    })

    editList.addEventListener('click', function(){
      inputDescription.value = item.description
      inputSerie.value = item.title
      isEditing = index;
    })
    
    sectionCard.appendChild(ul)    
    document.body.appendChild(sectionCard) 
  }) 
}

window.onload = renderItem()
 


