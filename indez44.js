//var numeroRandom = Math.floor(Math.random() * 20);

//console.log(numeroRandom);

function generarNumero(limitesuperior) {
  return Math.floor(Math.random() * limitesuperior);
}
for (var i = 0; i < 15; i++){
  console.log(generarNumero(5));
}
