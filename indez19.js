function seleccionarIdioma (valor) {
    var idioma;
    switch (valor) {
       case 1:
        idioma = "spanish";
        break;
    
    case 2:
        idioma = "france";
        break;
    case 3:
        idioma = "ruso";
    break;
    case 4:
        idioma = "ingles";
        break;
        default:
            idioma = "mandarin";
            break;
    }
    return idioma;
    }
console.log(seleccionarIdioma(2))
