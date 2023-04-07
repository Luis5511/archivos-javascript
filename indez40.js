var miArreglo = [[1,2,3],[4,5,6],[7,8,9]];

for (var i = 0; i < miArreglo.length; i++) {
    console.log("> nueva iteracion:");
    var arregloAnidado = miArreglo[i];
    console.log("arreglo: " + arregloAnidado);
    for (var j = 0; j < arregloAnidado.length; j++) {
        console.log('>>>ciclo anidado')
        console.log('elemento:')
        console.log(arregloAnidado[j])
    }
}