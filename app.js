const argv = require('./config/yargs').argv;
const colors = require('colors');
const porhacer = require('./por-hacer/por-hacer')

let comando = argv._[0]; //recuperar 1er valor de la consola con argv
switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion)
        console.log(tarea)
        break;
    case 'listar':
        let listado = porhacer.getListado();
        break;

    case 'actualizar':
        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porhacer.borrar(argv.descripcion)
        console.log(borrado)
        break;

    case 'filtrar':
        let filtro = porhacer.filtrar(argv.completado)
        console.log(filtro)
        break;
    default:
        console.log('comado no reconocido');
}