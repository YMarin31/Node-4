require('colors');
const { inquirerMenu } = require('./helpers/inquirer');
const { mostrarMenu, pausa } = require('./helpers/mensajes');
console.clear();

const main = async () => {
    console.log('Hola Mundo');
    let opt = '';
    do {
        /* opt = await mostrarMenu();
        if(opt!=='0') await pausa();*/
        opt = await inquirerMenu();
    }
    while (opt !== '0');



}

main();