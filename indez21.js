/*function miFuncion() {
    console.log("hola");
    return "mundo";
    console.log("adios");
}

console.log(miFuncion());*/
function calcularRaizCuadrada(num) {
     if (num < 0) {
        return undefined;
     }
     return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(-1));