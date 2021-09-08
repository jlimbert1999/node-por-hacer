const { demand } = require('yargs');

const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Este comando crear una lista"

}
const completado = {
    alias: 'c',
    default: true,
    desc: "marca como completado"
}
const argv = require('yargs')
    .command('crear', 'crea un elemento con datos', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: "Este comando crear una lista"
        }
    })
    .command('actualizar', 'actualiza los datos', {
        descripcion,
        completado
    })
    .command('borrar', 'elimina un elemento', {
        descripcion: {
            demand: true,
            alias: 'b',
            desc: "comando borrar"
        }
    })
    .command('filtrar', 'este comando filtra', {
        completado: {
            alias: 'c',
            desc: "marca como completado",
            demand: true
        }

    })
    .help()
    .argv;

module.exports = {
    argv
}