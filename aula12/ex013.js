var agora = new Date();
var diaSem = agora.getDay();
switch (diaSem) {
  case 0:
    console.log("Segunda");
    break;
  case 1:
    console.log("Terça");
    break;
  case 2:
    console.log("Quarta");
    break;
  case 3:
    console.log("Quinta");
    break;
  case 4:
    console.log("Sexta");
    break;
  case 5:
    console.log("Sábado");
    break;
  case 6:
    console.log("Domingo");
    break;
  default:
    console.log("ERRO! Dia não existente");
    break;
}
