function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = "img/dia.png";
    document.body.style.background = "#fccd93";
  } else if (hora >= 12 && hora <= 18) {
    // BOA TARDE!
    img.src = "img/tarde.png";
    document.body.style.background = "#becd8a";
  } else {
    // BOA NOITE!
    img.src = "img/noite.png";
    document.body.style.background = "#3b4857";
  } 
}