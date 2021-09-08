const fs = require('fs');
const colors = require('colors');
const { trace } = require('console');

let listadoHacer = [];


const guardarDb = () => {
    let data = JSON.stringify(listadoHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) {
            throw new Error("No se pudo graba", err)
        }
    });
}

function cargarDb(ds) {
    try {
        listadoHacer = require('../db/data.json') //cargamos datos del json

    }
    catch {
        listadoHacer = [];

    }

}

const crear = (descripcion) => {
    cargarDb();
    let porhacer = {
        descripcion,
        completado: "false"
    }
    listadoHacer.push(porhacer)
    guardarDb();
    return porhacer;
}

const getListado = () => {
    cargarDb()
    let datos = listadoHacer
    for (let i = 0; i < datos.length; i++) {
        console.log(`Por hacer`.green)
        console.log(datos[i].descripcion)
        console.log(datos[i].completado)
        console.log(datos[i])
        console.log('============'.green);
    }
}

const actualizar = (descripcion, completado) => {
    cargarDb();
    let index = listadoHacer.findIndex(posicion => posicion.descripcion===descripcion)
    if(index>=0){
        listadoHacer[index].completado=completado;
        guardarDb();
        return true
    }
    else{
        return false
    }

}
const borrar=(descripcion)=>{
    cargarDb()
    let index = listadoHacer.findIndex(posicion => posicion.descripcion===descripcion)
    if(index>=0){
        // let i = listadoHacer.indexOf( index );
        listadoHacer.splice( index, 1 );
        guardarDb();
        return true
    }
    else{
        return false
    }

}
const filtrar=(completado)=>{
    cargarDb();
    let filtro=listadoHacer.filter(tarea=>{
        return tarea.completado==completado
    })
    // console.log(filtro)
    if(filtro.length>0){
        console.log("lista filtrada")
        for(let i=0;i<filtro.length;i++){
            console.log(filtro[i])
        }
        return true
    }
    else{
        console.log("no hay ese estado")
        return false
    }
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    filtrar
    
}