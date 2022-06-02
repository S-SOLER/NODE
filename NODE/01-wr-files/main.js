//Requerimos el paquete
const fs = require('fs');
//Usamos el método de la librería
fs.writeFile(file, data[, options], callback)

//Requerimos el paquete
const fs = require('fs');

// Creamos un array de objetos que representan personas
const avengers = [{
        name: 'SpiderMan',
        power: 70
    },
    {
        name: 'Dr.Strange',
        power: 80
    },
    {
        name: 'Hulk',
        power: 110
    }
];

// Transformamos el array a un JSON en formato String
const avengersJson = JSON.stringify(avengers);

// Creamos el archivo people.json y dejamos que el callback
// nos avise cuando se complete la escritura.
fs.writeFile('avengers.json', avengersJson, () => {
    console.log('avengers.json created!');
})