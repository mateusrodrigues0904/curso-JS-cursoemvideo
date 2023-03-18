var agora = new Date();
var agora = agora.getHours();
var hora = 22;
console.log(`São exatamente ${hora} horas.`);
if (hora < 12) {
  console.log(`E está de manhã.`);
} else if (hora > 12 && hora < 19) {
  console.log(`E está de tarde.`);
} else if (hora > 18 && hora <= 23) {
  console.log(`E está de noite.`);
}
