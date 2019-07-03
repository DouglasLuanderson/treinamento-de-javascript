var imagens = new Array("assets/memecaetano.jpg","assets/meme_7.jpeg", "assets/MemeFabio.jpg", "assets/louco.jpg", "assets/meme.jpg");

function sortear(){
var num = Math.floor(Math.random()*6);
var img = Math.round(num);
document.getElementById("imagem").style.background = "url(" + imagens[img] + ") no-repeat";
console.log(num)
}
