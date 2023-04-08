/*var a;
var b;

[a,b, , , , , , , ,c] = [1,2,3,4,5,6,7,8,9,10];

console.log(a,b,c);

var a = 8;
var b = 6;

[b,a] = [a,b];

console.log(a,b)

var a;
var b;
var ar

[a,b, ...ar ] = [1,2,3,4,5,6,7,8,9];

console.log(a,b,ar);



const arregloInicial = [1,2,3,4,5,6,7,8]; 
    function remover(arreglo) {
        const [ , , , ...nuevoArreglo] = arreglo;
        return nuevoArreglo;
    }

    const arregloFinal = remover(arregloInicial);
    console.log(arregloFinal); 


var nuevoPerfilCliente = {
    nombre: "Jane Doe",
    edad: 24,
    nacionalidad: "spain",
    ubicacion: "spain"
};

/*const actualizarPerfil = (informacionPerfil) => {
 const {nombre,edad,nacionalidad,ubicacion} = informacionPerfil;
     
};

const actualizarPerfil = ({nombre,edad,nacionalidad,ubicacion}) => {
 console.log(nombre);
 console.log(edad);
 console.log(nacionalidad);
 console.log(ubicacion);
};

actualizarPerfil(nuevoPerfilCliente); */

const estadisticas = {
    max: 56.78,
    desviacionEstandar:4.34,
    mediana:34.54,
    moda:23.87,
    min: -0.75,
    promedio: 35.85
};

const mitad = ({max,min}) => (max + min) / 2.0;

console.log(mitad(estadisticas));