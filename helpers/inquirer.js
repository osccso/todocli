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
        name: `${'1.'.red} Add a Task`
      }
      ,
      {
        value: '2',
        name: `${'2.'.red} List Tasks`
      }
      ,
      {
        value: '3',
        name: `${'3.'.red} List Completed Tasks`
      }
      ,
      {
        value: '4',
        name: `${'4.'.red} List Incompleted Tasks`
      }
      ,
      {
        value: '5',
        name: `${'5.'.red} Finish a Task`
      }
      ,
      {
        value: '6',
        name: `${'6.'.red} Delete a Task`
      }
      ,
      {
        value: '0',
        name: `${'7.'.cyan} Exit`
      }
    ]
  }
]

const inquirerMenu = async () => {
  console.clear();
  console.log('*****************************'.green);
  console.log('Select an option:'.white);
  console.log('*****************************\n'.green);
  const {option} = await inquirer.prompt(menuOpts)
  return option
}

const pause = async() => {
  const wait = await inquirer.prompt(waitMesaage)
  return wait 
}

const readInput = async (message = '') => {
  const input = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if (value.length) {
          return true
        } else {
          return 'Please enter a value'
        }
      }
    }
  ]
  const {description} = await inquirer.prompt(input)
  return description
}

module.exports = {
  inquirerMenu,
  pause,
  readInput
}