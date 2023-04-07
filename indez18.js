function clasificarvolumen(valor) {
    var volumen;
    switch (valor) {
        case 1:
            volumen = "bajo";
            break;
            case 2:
                case 3:
                    volumen = "medio";
                    break;
                    case 4:
                        case 5:
                            case 6:
                                volumen = "alto";
                                break;
    }
    return volumen;
}
console.log(clasificarvolumen(1));