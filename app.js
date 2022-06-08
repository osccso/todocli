require('colors')
const { inquirerMenu, pause } = require('./helpers/inquirer')
const Task = require('./models/task')
const Tasks = require('./models/tasks')

const main = async() => {
  let opt = ''
  do {
    opt = await inquirerMenu()
    if (opt !=='0') await pause()
  } while(opt !=='0')
}
main()