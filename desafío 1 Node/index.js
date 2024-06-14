const { registrar, leer } = require('./operaciones.js');

const argumentos = process.argv.slice(2);

const funcion = argumentos[0];

if (funcion === "registrar") {
    const nombre = argumentos[1];
    const edad = argumentos[2];
    const tipoAnimal = argumentos[3];
    const colorAnimal = argumentos[4];
    const enfermedad = argumentos[5];

    registrar(nombre, edad, tipoAnimal, colorAnimal, enfermedad);
} else if (funcion === "leer"){
    leer();
}; 