const inquirer = require('inquirer');

const menuList = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ['opt 1', 'opt 2']
    }
];

const inquirerMenu =async() => {

    //console.clear();
    console.log('================='.green);
    console.log('Seleccione una opcion'.green);
    console.log('================='.green);

    const opt = await inquirer.prompt(menuList);

    return opt;
}

module.exports= {
    inquirerMenu
}