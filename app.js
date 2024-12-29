require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');
console.clear();

const main = async () => {
    let opt = '';
    do {
        /* opt = await mostrarMenu();
        if(opt!=='0') await pausa();*/
        opt = await inquirerMenu();
        if(opt!=='0') await pausa();
    }
    while (opt !== '0');



}

main();