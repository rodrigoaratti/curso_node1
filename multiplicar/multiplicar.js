const fs = require('fs');
const colores = require('colors');

let obtenerData = (base, maximo) => {
    let data = '';

    for (let i = 0; i <= maximo; i++) {
        data += (`${i} * ${base} = ${i*base }\n`);
    }
    return data;
}
let crearArchivo = (base, maximo) => {
    let datos = obtenerData(base, maximo);
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base no es un numero ${base}`);
            return;
        }
        if (!Number(maximo)) {
            reject(`El maximo no es un numero ${maximo}`);
            return;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, datos, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(`../tablas/tabla${base}.txt`);
        });

    });
}

let listarDatos = (base, maximo) => {
    let data = obtenerData(base, maximo);
    console.log(data.green);
}


module.exports = {
    crearArchivo,
    listarDatos
}