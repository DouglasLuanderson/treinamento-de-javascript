
function renderMain(){

	let widget = [	
				{"opportunity":
					{	"id":148603,
						"name":"Redator Publicitário",
						"published_at":"2019-08-12 11:07:30 -0300",
						"company_name":"lowfat comunicação",
						"permalink":"http://trampos.co/oportunidades/148603-redator-publicitario"}
					},
				{"opportunity":
					{	"id":150326,"name":"Assistente de Comunicação ",
						"published_at":"2019-08-12 11:04:00 -0300",
						"company_name":"Agência Contatto Assessoria de Imprensa e Conteúdo",
						"permalink":"http://trampos.co/oportunidades/150326-assistente-de-comunicacao"}
					},
				{"opportunity":
					{	"id":150183,"name":"Desenvolvedor Front-end Sênior",
						"published_at":"2019-08-12 11:02:07 -0300",
						"company_name":"CoreBiz",
						"permalink":"http://trampos.co/oportunidades/150183-desenvolvedor-front-end-senior"}
					},
				{"opportunity":
					{	"id":150292,"name":"Analista Desenvolvedor Full Stack",
						"published_at":"2019-08-12 11:00:55 -0300","company_name":"Tailorit",
						"permalink":"http://trampos.co/oportunidades/150292-analista-desenvolvedor-full-stack"}
					},
				{"opportunity":
					{	"id":150293,"name":"Revisor de Espanhol",
						"published_at":"2019-08-12 10:56:03 -0300",
						"company_name":"REF+","permalink":"http://trampos.co/oportunidades/150293-revisor-de-espanhol"}
					},
				{"opportunity":
					{	"id":150325,"name":"Estrategista de Contas",
						"published_at":"2019-08-12 10:54:08 -0300",
						"company_name":"TTEC","permalink":"http://trampos.co/oportunidades/150325-estrategista-de-contas"}
					},
				{"opportunity":
					{	"id":150323,"name":"Estagiário em Marketing Digital",
						"published_at":"2019-08-12 10:48:46 -0300",
						"company_name":"Martin Luz",
						"permalink":"http://trampos.co/oportunidades/150323-estagiario-em-marketing-digital"}
					},
				{"opportunity":
					{	"id":150290,"name":"Desenvolvedor Full Stack Pleno",
						"published_at":"2019-08-12 10:30:02 -0300",
						"company_name":"SOLIS TECNOLOGIA",
						"permalink":"http://trampos.co/oportunidades/150290-desenvolvedor-full-stack-pleno"}
					},
				{"opportunity":
					{	"id":150179,"name":"Coordenador de Influenciadores Digitais",
						"published_at":"2019-08-12 09:37:03 -0300",
						"company_name":"LIFE HEALTH",
						"permalink":"http://trampos.co/oportunidades/150179-coordenador-de-influenciadores-digitais"}
					},
				{"opportunity":
					{	"id":150251,"name":" Web Designer  / Analista de Arte Júnior",
						"published_at":"2019-08-12 08:25:16 -0300",
						"company_name":"PMK Involvement Marketing",
						"permalink":"http://trampos.co/oportunidades/150251-web-designer-analista-de-arte-junior"}
					}
			]

	let cont = 0;
	let object = widget.length;
	let idsVaga = [];
	
	for (let i = 0; i <= object; i++) {
		let listVagas = document.getElementById('listVagas')
		let ulLista = document.createElement('ul')
		listVagas.appendChild(ulLista)

		let textNomes = document.createElement('p')
		namesVaga = widget[cont].opportunity.name
		textNomes = document.createTextNode(namesVaga)

		let textVagaNomes = document.createElement('p')
		namesCompany = widget[cont].opportunity.company_name
		textVagaNomes = document.createTextNode(namesCompany)
		

		let liLista = document.createElement('li')

		ulLista.style.height = "auto"
		ulLista.style.listStyle = "none"
		ulLista.style.margin = "0"
		ulLista.style.display = "flex"
		ulLista.style.flexDirection = "column"
		ulLista.style.padding = "0px 0px 0px 0px"
		ulLista.style.alignItems = "flex-end"
    	ulLista.style.fontSize = "1.5em"
		

		liLista.style.display = "flex"
		liLista.style.justifyContent = "center"
		liLista.style.alignItems = "center"
		liLista.style.padding = "5px 0px 0px 0px"
		liLista.style.height = "8.5vh"
		liLista.style.color = "white"
		liLista.style.width = "98.5%"
		liLista.style.backgroundColor = "#38332f"

		
		liLista.appendChild(textNomes)
	
		console.log(liLista)
		ulLista.appendChild(liLista)


		liLista.addEventListener("mouseover", function( event ) {   
			ulLista.style.color = "white"
	    ulLista.style.height = "20vh";
	    ulLista.appendChild(textVagaNomes)
	    setTimeout(function() {
	      
	    }, 500);
	  }, false);
	  
	  
	  ulLista.addEventListener("mouseout", function( event ) {   
	    ulLista.style.height = "8.5vh";
	    textVagaNomes.remove()
	    setTimeout(function() {
	      
	    }, 500);
	  }, false);

		if(cont%2 == 0){
			ulLista.style.backgroundColor = "#ed5d6c"
		}
		if(cont == 2){
			ulLista.style.backgroundColor = "#e0c233"
		}
		if(cont%2 == 1){
			ulLista.style.backgroundColor = "#52c2c5"
		}
		
		cont++
	}
}
document.onload = renderMain()