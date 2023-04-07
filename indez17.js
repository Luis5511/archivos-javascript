function SselecionarIdioma (valor) {
    var idioma = valor;
    switch (valor) {
        case 1:
            idioma = "spanish";
            break;
            case 2:
                idioma = "france";
                break;
                case 3:
                    idioma = "ingles"
                    break;
                    default:
                        idioma = "ruso"
                        break;
    }
    return idioma;
}

console.log(SselecionarIdioma(7))