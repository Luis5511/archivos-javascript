/*const persona = {
    nombre: "isabel",
    presentarse() {
        return `hola,mi nombre es ${this.nombre}.`;
    }
}

console.log(persona.presentarse());

class TransbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta;
    }
}

var zeus = new TransbordadorEspacial("jupiter");
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial("marte");
console.log(apolo.planeta);

class Mascota {
    constructor(nombre,edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

var miMascota = new Mascota('nora',5);
var tuMascota = new Mascota('joe',3);

console.log(miMascota.nombre);
console.log(miMascota.edad);

console.log(tuMascota.nombre,tuMascota.edad);*/




class Libro {
    constructor(autor) {
        this._autor = autor;
    }

    get autor() {
        return this._autor;
    }

    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
    }
}

const libro = new Libro("anonimo");
console.log(libro.autor);