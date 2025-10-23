function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();

  var hora = data.getHours();
  var minutos = data.getMinutes();

  if (minutos < 10) minutos = "0" + minutos;

  msg.innerHTML = `Agora são ${hora}:${minutos} horas.`;

  if (hora >= 0 && hora < 12) {
    img.src = "img/dia.png";
    document.body.style.background = "#fccd93";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "img/tarde.png";
    document.body.style.background = "#becd8a";
  } else {
    img.src = "img/noite.png";
    document.body.style.background = "#3b4857";
  } 
}
