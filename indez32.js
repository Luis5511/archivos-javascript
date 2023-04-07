var miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina":"100 grs",
            "sal": "1 cucharadas",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            'chocolate': "4 cucharadas",
            "mantequilla": "200 grs"
        }
    }
};

console.log(miReceta.ingredientes.cobertura.mantequilla);