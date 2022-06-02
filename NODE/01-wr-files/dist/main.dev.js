"use strict";

//Requerimos el paquete
var fs = require('fs');

var coche = [{
  id: 1,
  marca: 'Volkswagen',
  modelo: 'Golf',
  annoFabrication: 2020
}, {
  id: 2,
  marca: 'Volkswagen',
  modelo: 'Golf',
  annoFabrication: 2020
}, {
  id: 3,
  marca: 'Ford',
  modelo: 'Golf',
  annoFabrication: 2020
}];
fileSystem.writeFile('coche.json', JSON.stringify(coche), function (error) {
  if (error) {
    cconsole.log('Error');
    return;
  }

  console.log('Yeah');
});