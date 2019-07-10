let position = 0, test, status, choice, correct = 0;
let questions = [
    ["Qual a Capital do Rio de Janeiro?", "Manaus", "Porto de galinhas", "Rio de Jaeiro", "C"],
    ["Qual a capital do Paraná?", "Rio Branco", "Paraná", "Coritiba", "C"],
    ["Qual a capital do Acre?", "Boa Vista", "Rio Branco", "Palmas", "B"],
    ["Qual a capital do Maranhão", "Ilhaus", "Teresina", "São Luís", "C"]
];

document.getElementById("start").addEventListener("click", function(){
iniciar('start').css('display','none');
console.log("hello")
})

function search(search){
  return document.getElementById(search);
}

function renderQuestion(){
  test = search("test");
  if(position >= questions.length){
    test.innerHTML = "<h2>Você acertou "+correct+" de "+questions.length+" questões</h2>";
    search("status").innerHTML = "Teste completo";
    position = 0;
    correct = 0;
    return false;
  }
  search("status").innerHTML = "Question "+(position+1)+" of "+questions.length;
  question = questions[position][0];
  option1 = questions[position][1];
  option2 = questions[position][2];
  option3 = questions[position][3];

  test.innerHTML = "<h1>"+question+"</h1>";
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+option1+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+option2+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+option3+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Confirmar</button>";
}


function checkAnswer(){

  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[position][4]){
    correct++;
  }
  position++;
  renderQuestion();
}



window.addEventListener("load", renderQuestion, false);




// let quiz = [{
//   "Questão": "qual a capital do Rio de Janeiro?",
//   "Resposta": ["Manaus", "Porto de galinhas", "Rio de Jaeiro"],
//   "certo": "Rio de Janeiro"
//   },

//   {
//   "Questão": "qual a capital do Paraná?",
//   "Resposta": ["Rio Branco", "Paraná", "Coritiba"],
//   "certo": "Coritiba"
//   },

//   {
//   "Questão": "qual a capital do Acre?",
//   "Resposta": ["Boa Vista", "Rio Branco", "Palmas"],
//   "certo": "Rio Branco"
//   },

//   {
//   "Questão": "qual a capital do Maranhão?",
//   "Resposta": ["Ilhaus", "Teresina", "São Luís"],
//   "certo": "São Luís"
//   },

//   ];

//   function()