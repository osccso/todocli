require('colors')
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer')
const { saveData } = require('./helpers/savefile')
const Tasks = require('./models/tasks')

const main = async() => {
  let opt = ''
  const tasks = new Tasks()
  do {
    opt = await inquirerMenu()

    switch (opt) {
      case '1':
        const description = await readInput('Description: ')
        tasks.addTask(description)
      break
      case '2':
        console.log(tasks.listingArray);
      break
      case '3':
        console.log(tasks.listingArray.filter(task => task.completedAt !== null));
      break
      case '4':
        console.log(tasks.listingArray.filter(task => task.completedAt === null));
      break
      case '5':
        
      break
      case '6':
        const taskDelete = await readInput('Task to delete: ')
        tasks.deleteTask(taskDelete)
      break
    }
    saveData(tasks.listingArray)

    if (opt !=='0') await pause()
  } while(opt !=='0')
}
main()