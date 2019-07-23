let cards = []
let isEditing = undefined;
let form = document.createElement("form");
let ul = document.createElement("ul");
let sectionCard = document.createElement("section");
let inputSerie = document.createElement("input");  
let inputDescription = document.createElement("input"); 


function renderItem (){
 
  let label = document.createElement("label");  
  let button = document.createElement("button");
  let title = document.createElement("h1");

  inputSerie.setAttribute("placeholder", "title")
  inputDescription.setAttribute("placeholder", "descrition")

  button.innerHTML = "Enviar";
  title.innerHTML = "Bliblioteca de Séries";


  form.appendChild(label);
  form.appendChild(title);
  form.appendChild(inputSerie);
  form.appendChild(inputDescription);
  form.appendChild(button);
  document.body.appendChild(form);

  button.addEventListener("click", function(){	
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
 


// form.addEventListener("submit", event => {	
// 	event.preventDefault();

// 	list.push({
// 		title: form.elements.title.value,
// 		description: form.elements.description.value,
// 		episode: form.elements.category.value,

// 	})

// 		form.elements.title.value = ''
// 		form.elements.description.value = ''
// 		form.elements.episode.value = ''	


// 	render()
// });

// function render() { 

//   list.map((item) => {
//     let card = document.createElement("li");

//     let title = renderItem("h2", item.title);
//     let description = renderItem("p", item.description);
//     let episode = renderItem("p", item.episode);
    
//     card.appendChild(title);    
//     card.appendChild(description);
//     card.appendChild(episode);

//     card.style.backgroundColor = item.color;

//     film.appendChild(card);
  
//   });


// };