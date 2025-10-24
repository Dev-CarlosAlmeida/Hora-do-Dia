function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");

function pad(num) {
  if (num < 10) return "0" + num;
  return num;
}
  
function atualizarHora() {
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();
  var segundos = data.getSeconds();

  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;

  msg.textContent = hora + ":" + minutos + ":" + segundos;

   var larguraTela = window.innerWidth;
   var tamanhoFonte, espacoPadding;

   if (larguraTela <= 600) { // celular
      tamanhoFonte = "6vw";    // maior no celular
      espacoPadding = "6px 10px";
    } else { // tablet ou PC
      tamanhoFonte = "1.5vw";  // menor no PC
      espacoPadding = "2px 4px";
    }

  msg.style.color = "#f00"; 
  msg.style.background = "#000"; 
  msg.style.padding = espacoPadding;
  msg.style.borderRadius = "4px";
  msg.style.fontFamily = "monospace";
  msg.style.fontSize = tamanhoFonte;
  msg.style.letterSpacing = "0.3vw";
  msg.style.textAlign = "center";
  msg.style.display = "inline-block";
  msg.style.margin = "20px auto";
  
  var section = msg.parentNode;
  section.style.display = "flex";
  section.style.flexDirection = "column";
  section.style.justifyContent = "center";
  section.style.alignItems = "center";


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