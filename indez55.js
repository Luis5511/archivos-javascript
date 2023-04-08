/*const numeros = [1,2,3];

function sumar(x,y,z) {
    return x + y + z;;
}


console.log(sumar(...numeros));*/

/*const usuario = {
    nombre: "gino smith",
    edad: 34
};

const {nombre,edad} = usuario;

var coordenadas = {
    x:4,
    y:6,
    z:12
};

const {x,y,z} = coordenadas;

console.log(coordenadas);

const usuario = {
    jonhDoe : {
        edad:27,
        correo: "jonhdoe@cursojavascript.com"
    }
};

const {jonhDoe: {edad: edadDelUsuario,correo:correoDelUsuario}} = usuario;

console.log(edadDelUsuario);
console.log(correoDelUsuario);*/



const PRONOSTICO_LOCAL = {
    "ayer": {
        minima: 61,
        maxima:75
    },
    "hoy": {
        minima: 64,
        maxima:77
    },
    "manana": {
        minima:68,
        maxima:80
    }
}

//const minimoHoy = PRONOSTICO_LOCAL.hoy.minima;
//const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

//console.log(minimoHoy,maximaHoy );

const {hoy:{maxima: maximaHoy,minima: minimaHoy}} = PRONOSTICO_LOCAL;
console.log(maximaHoy,minimaHoy);