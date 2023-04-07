/*var idiomas = {
      "S": "spanich",
      "F": "france",
      "R": "ruso",
      "I": "ingles"
    };

    console.log(idiomas.hasOwnProperty("S"));
    console.log(idiomas.hasOwnProperty("Q"));*/


    function verificarPropiedad(obj,propiedad) {
        if(obj.hasOwnProperty(propiedad)){
        return "propiedad: " + obj[propiedad];
       } else {
          return "el objeto no tiene esta propiedad";
        }
     
    }
    var idiomas = {
      "S": "spanish",
      "F": "france",
      "R": "ruso",
      "I": "ingles"
    };

    console.log(verificarPropiedad(idiomas,"S"))