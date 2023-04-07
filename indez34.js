var coleccionDeDiscos = {
7853: {
    tituloDelAlbum: "spine",
    artista: "Lit Killah",
    canciones: ["mientras tanto"]
},
  5439: {
        tituloDelAlbum: "portales"
    }

};

function actualizarDiscos(discos,id,propiedad,valor) {
    if(valor === "") {
        delete discos[id][propiedad];
    }
    else if (propiedad === "canciones") {
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    } else {
        discos[id][propiedad] = valor;
    }
}

console.log(coleccionDeDiscos[5439].artista);

actualizarDiscos(coleccionDeDiscos, 5439, "artista", "Tiago PZK");

console.log(coleccionDeDiscos[5439].artista);