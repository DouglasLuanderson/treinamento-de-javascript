let cards = []
let isEditing = undefined;
let form = document.createElement("form");
let ul = document.createElement("ul");
let sectionCard = document.createElement("section");
let inputSerie = document.createElement("input"); 
let inputDescription = document.createElement("input"); 
let buttonEpisode = document.createElement("button"); 
let buttonSubmit = document.createElement("button");


 
function renderItem (){
 
  let label = document.createElement("label");  
  let title = document.createElement("h1");

  inputSerie.setAttribute("placeholder", "Nome da Série");
  inputSerie.setAttribute("required", "true");
  inputDescription.setAttribute("placeholder", "Sinopse da Série");
  inputDescription.setAttribute("required", "true");

  buttonEpisode.innerHTML = "Novo Episódio";
  buttonSubmit.innerHTML = "Adicionar Série";  
  title.innerHTML = "Bliblioteca de Séries";

  form.appendChild(label);
  form.appendChild(title);

  form.appendChild(inputSerie);
  form.appendChild(inputDescription);
  form.appendChild(buttonEpisode);
  form.appendChild(buttonSubmit); 
  document.body.appendChild(form);

  buttonSubmit.addEventListener("click", function(){	
    event.preventDefault();

    if (typeof(isEditing) == 'number'){
      editCard();
    }
    else{
      cards.push({
        description: inputDescription.value,
        title: inputSerie.value,
      })
    }    

    inputSerie.value = "";
    inputDescription.value = "";
    render();
  });
}

function editCard (){
  cards[isEditing] = {
    description: inputDescription.value,
    title: inputSerie.value
  };

  isEditing = undefined;
  inputSerie.value = "";
  inputDescription.value = "";
  render()
}

function deletCard(cards, item){
  return cards.filter(function(el){
    return el != item;
  });
}

function render(){
  while (ul.firstChild){
    ul.removeChild(ul.firstChild);
  }

  cards.map((item, index) => {
    
    let li = document.createElement("li");
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
    li.classList.add("titulo")

    // elementSerieTitle.appendChild(elementSerieDescription)
    // elementInfoTitle.appendChild(elementInfoDescription)   
    li.appendChild(elementSerieTitle)
    li.appendChild(elementInfoTitle)
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
 


