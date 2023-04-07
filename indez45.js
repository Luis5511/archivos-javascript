function rangoRandom(limiteInferior,limiteSuperior) {
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
}

console.log(rangoRandom(3,9))