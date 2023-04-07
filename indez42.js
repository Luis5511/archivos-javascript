var contactos = [
    {
        'nombre': 'nora',
        'apellidos': 'nav',
        'numero':'0543236543',
        'gustos': ['pizza','programacion']
    },
    {
         'nombre': 'jorge',
        'apellidos': 'manga',
        'numero':'0537648912',
        'gustos': ['churro','violin']
    },
    {
         'nombre': 'pedro',
        'apellidos': 'mergin',
        'numero':'0529515063',
        'gustos': ['helado','juegos']
    }
];

function buscarperfil(nombre,propiedad) {
    for (var i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre === nombre) {
            return contactos[i][propiedad] || "la propiedad no existe.";
        }
    }
    return "el contacto no existe."
}

console.log(buscarperfil("pedro","don"))