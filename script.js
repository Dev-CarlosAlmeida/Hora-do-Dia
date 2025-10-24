function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  
function atualizarHora() {
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();
  var segundos = data.getSeconds();

  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;

  msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`;

  if (hora >= 0 && hora < 12) {
    img.src = "img/dia.png";
    document.body.style.background = "#fccd93";
  } else if (hora >= 12 && hora < 18) {
    img.src = "img/tarde.png";
    document.body.style.background = "#becd8a";
  } else {
    img.src = "img/noite.png";
    document.body.style.background = "#3b4857";
  } 
}

  atualizarHora();
  setInterval(atualizarHora, 1000);
}