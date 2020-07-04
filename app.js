//const fs = require('fs'); // es propia de node
//const fs = require('express'); No es de node, es un paquete que se instala y despues se puede usar, desarrollado por alguien mas.
//const fs = require('./fs'); Archivos de nuestro propio proyecto
const mult = require('./multiplicar/multiplicar');


const { crearArchivo, listarDatos } = require('./multiplicar/multiplicar');


const { argv } = require('./config/yargs');

const colores = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'Listar':
        listarDatos(argv.base, argv.maximo);
        break;
    case 'Crear':
        crearArchivo(argv.base, argv.maximo).then(archivo => console.log(`Se creo el archivo ${colores.red(archivo)}`))
            .catch(err => { console.log(err) });
        break;
    default:
        console.log("Comando incorrecto!!");
        break;
}