function verificar() {
  var i, nascimento, idade, sexo, msg, img;
  msg = document.getElementById("imsg");
  img = document.getElementById("iimg");
  sexo = document.getElementsByName("sexo");
  nascimento = document.getElementById("inas").value;
  idade = 2023 - nascimento;

  for (i = 0; i < sexo.length; i++) {
    if (sexo[i].checked) {
      sexo = sexo[i].value;
    }
  }

  img.style.opacity = "100%";
  img.style.display = "block";

  if (sexo == "M") {
    msg.innerHTML = `Detectamos um Homem com ${idade} anos.`;
    if (idade > 0 && idade <= 17) {
      img.style.backgroundImage = "url(img/hcrianca.jpg)";
    } else if (idade > 17 && idade <= 45) {
      img.style.backgroundImage = "url(img/hjovem.jpg)";
      img.style.backgroundPosition = "center";
    } else if (idade > 45 && idade <= 123) {
      img.style.backgroundImage = "url(img/hidoso.jpg)";
    } else {
      msg.innerHTML = `Digite um valor válido.`;
    }
  } else {
    msg.innerHTML = `Detectamos uma Mulher com ${idade} anos.`;
    if (idade > 0 && idade <= 17) {
      img.style.backgroundImage = "url(img/fcrianca.jpg)";
    } else if (idade > 17 && idade <= 45) {
      img.style.backgroundImage = "url(img/fjovem.jpg)";
    } else if (idade > 45 && idade <= 123) {
      img.style.backgroundImage = "url(img/fidoso.jpg)";
    } else {
      msg.innerHTML = `Digite um valor válido.`;
      img.style.display = "none";
    }
  }
}
