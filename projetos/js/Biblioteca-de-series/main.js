let cards = []
let form = document.createElement("form");
let ul = document.createElement("ul");


 function renderItem (){
 
  let label = document.createElement("label");
  let inputSerie = document.createElement("input");  
  let inputDescription = document.createElement("input");  
  let button = document.createElement("button");
  let title = document.createElement("h1");

  inputSerie.setAttribute("placeholder", "title")
  inputDescription.setAttribute("placeholder", "descrition")

  button.innerHTML = "Enviar";
  title.innerHTML = "Título";

  document.body.appendChild(form);
  form.appendChild(label);
  form.appendChild(title);
  form.appendChild(inputSerie);
  form.appendChild(inputDescription);
  form.appendChild(button);


  button.addEventListener("click", function(){	
    event.preventDefault();
     cards.push({
       descrition: inputSerie.value,
       title: inputDescription.value
    })
    inputSerie.value="";
    inputDescription.value="";
    render()
  });
}
function render(){
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
  cards.map((item)=>{
    
    let sectionCard = document.createElement("section");
    let li = document.createElement("li");
    let elementSerieTitle = document.createElement("p");
    elementSerieTitle.innerHTML = item.title
    // let elementSerieDescription = document.createTextNode(item.title);
    let elementInfoTitle = document.createElement("p");
    elementInfoTitle.innerHTML = item.descrition
    // let elementInfoDescription = document.createTextNode(item.description);    
    let deletList = document.createElement("button")

    deletList.innerHTML = "Excluir";
    li.classList.add("titulo")

    // elementSerieTitle.appendChild(elementSerieDescription)
    // elementInfoTitle.appendChild(elementInfoDescription)   
    li.appendChild(elementSerieTitle)
    li.appendChild(elementInfoTitle)
    li.appendChild(deletList)
    ul.appendChild(li)
   

    
    sectionCard.appendChild(ul)    
    document.body.appendChild(sectionCard) 
  }
)}

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