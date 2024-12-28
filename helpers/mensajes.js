require('colors');

const mostrarMenu = () => {

    console.clear();
    console.log('================='.green);
    console.log('Seleccione una opcion'.green);
    console.log('================='.green);


    console.log(`${'1'.red} Crear tarea`);
    console.log(`${'2'.red} Listar tareas`);
    console.log(`${'3'.red} Listar tareas completadas`);
    console.log(`${'4'.red} Listar tareas Pendientes`);
    console.log(`${'5'.red} Completar tarea(s)`);
    console.log(`${'6'.red} Borrar tarea`);
    console.log(`${'0'.red} Salir`);

}

module.exports = {
    mostrarMenu
}