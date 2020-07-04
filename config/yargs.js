const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    maximo: {
        alias: 'm',
        default: 10
    }
};

const argv = require('yargs')
    .command('Crear', "Crea un archivo con las tablas en la base seleccionada y hasta el nro seleccionado", opts)
    .command('Listar', 'Imprime la lista de la tabla sin generar el archivo', opts)
    .help()
    .argv;

module.exports = {
    argv
};