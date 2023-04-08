/*cvar a = 6;
//console.log(`el valor de a es ${a}`);

//var nombre = 'nora';
//var edad = 6;

//console.log(`Mi nombre es ${nombre} y tengo ${edad} years.//`);

var miArreglo = [1,2,3,4];

console.log(`el arreglo es ${miArreglo}`)
console.log(`mi arreglo es ${JSON.stringify(miArreglo)}`);

var persona = {
    nombre: "Gino Cass",
    edad: 10
};

const SALUDO = `hola mi nombre es ${persona.nombre} y tengo ${persona.edad} years`;

console.log(SALUDO)*/

const crearPersona = (nombre,edad,idioma) => ({nombre,edad,idioma});
console.log(crearPersona("Gino Smith",28,"spanish"));