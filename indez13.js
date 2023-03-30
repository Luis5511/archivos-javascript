/*function clasificarvalor(valor) {
    if (valor < 5) {
         console.log("menoR que 5."); }
else if (valor < 10){
 console.log("menoR que 10.");
} else{
    console.log("mayor O igual a 10.")
}
}
clasificarvalor(11)*/

function interpretarIMC(indiceDeMasaCorporal){
    if (indiceDeMasaCorporal < 18.5) {
        console.log("bajo peso");
    }
    else if (indiceDeMasaCorporal <= 24.9) {
        console.log("peso normal");
    }
    else if (indiceDeMasaCorporal <= 29.9){
        console.log("sobrepeso");
    }
    else {
        console.log("obeso")
    }
}
interpretarIMC(30)