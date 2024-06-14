const fs = require('fs');


function registrar(nombre, edad, tipoAnimal, colorAnimal, enfermedad) {
   
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));

    const nuevaCita = {
        nombre: nombre,
        edad: edad,
        tipoAnimal: tipoAnimal,
        colorAnimal: colorAnimal,
        enfermedad: enfermedad
    };
   
    citas.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citas));
}

function leer() {
   
    let citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));

    console.log(citas);
}

module.exports = { registrar, leer };
