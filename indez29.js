function seleccionarIdioma (valor) {
    var idioma;

    var idiomas = {
      "S": "spanich",
      "F": "france",
      "R": "ruso",
      "I": "ingles"
    };
return idiomas[valor]
}

console.log(seleccionarIdioma("S" ));
console.log(seleccionarIdioma("F" ));
console.log(seleccionarIdioma( "R"));
console.log(seleccionarIdioma("I" ));
