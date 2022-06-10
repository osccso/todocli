/**
 * _listado : 
 *    {'uuid-124253235-2423535-2': {id:12, description:'tarea 1', completedAt:99230}},
 *    {'uuid-124253235-2423535-3': {id:13, description:'tarea 2', completedAt:99230}},
 *    {'uuid-124253235-2423535-4': {id:14, description:'tarea 3', completedAt:99230}}
 */

const Task = require("./task")


class Tasks {
  _listing = {}
  get listingArray () {
    const listingArr = []
    Object.keys(this._listing).forEach(key => { 
      const task = this._listing[key]
      listingArr.push(task)
    })
    return listingArr
  }
  constructor () {
    this._listing = {}
  }
  addTask (desc = '') {
    const task =  new Task(desc)
    this._listing[task.id] = task
  }
}

module.exports = Tasks