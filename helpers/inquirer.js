const inquirer = require('inquirer');
require('colors')

const waitMesaage = [
  {
    type: 'input',
    name: 'wait',
    message: `Press ${'ENTER'.green} to continue...`,
  }
]

const menuOpts = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?:',
    choices: [
      {
        value: '1',
        name: '1. Add a Task'
      }
      ,
      {
        value: '2',
        name: '2. List Tasks'
      }
      ,
      {
        value: '3',
        name: '3. List Completed Tasks'
      }
      ,
      {
        value: '4',
        name: '4. List Incompleted Tasks'
      }
      ,
      {
        value: '5',
        name: '5. Finish a Task'
      }
      ,
      {
        value: '6',
        name: '6. Delete a Task'
      }
      ,
      {
        value: '0',
        name: '7. Exit'
      }
    ]
  }
]

const inquirerMenu = async () => {
  console.clear();
  console.log('*****************************'.green);
  console.log('Select an option:');
  console.log('*****************************\n'.green);
  const {option} = await inquirer.prompt(menuOpts)
  return option
}

const pause = async() => {
  const wait = await inquirer.prompt(waitMesaage)
  return wait 
}

module.exports = {
  inquirerMenu,
  pause
}