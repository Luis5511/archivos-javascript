/*
var miArreglo = [4,6,8,2];
var total = 0;

for (var i = 0; i < miArreglo.length; i++) {
    console.log("iteracion " + i);
    console.log(miArreglo[i]);
    total += miArreglo[i];
}

console.log(total);


var lenguajes = ['javascript','python','java','C++'];

for (var i = 0; i < lenguajes.length; i++) {
   console.log(lenguajes[i].toUpperCase());
}*/

function contarNumerospares(arreglo) {
    var total = 0;


    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            total++;
        }
    }
    return total;
}

console.log(contarNumerospares([5,3,1,2,2,8]));