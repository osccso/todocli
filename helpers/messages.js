require('colors')

const mostrarMenu = () => {
  return new Promise(resolve => {
    console.clear();
    console.log('*****************************'.green);
    console.log('Select an option:');
    console.log('*****************************'.green);
    console.log(`${'1.'.green} Add a Task`);
    console.log(`${'2.'.green} List Tasks`);
    console.log(`${'3.'.green} List Completed Tasks`);
    console.log(`${'4.'.green} List Incompleted Tasks`);
    console.log(`${'5.'.green} Finish a Task`);
    console.log(`${'6.'.green} Delete a Task`);
    console.log(`${'0.'.green} Exit\n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
    readline.question('Seleccione una opción: ',(answer) => {
      readline.close()
      resolve(answer)
    })
  })
  
}

const pause = () => {
  return new Promise(resolve => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question(`\nPress ${'ENTER'.green} to continue...\n`, (answer) => {
      readline.close()
      resolve()
    })
  })
}

module.exports = {
  mostrarMenu,
  pause
}