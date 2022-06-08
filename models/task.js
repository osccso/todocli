const {v4:genid} = require('uuid');

class Task {
  id = ''
  description = ''
  completedAt = null
  constructor (description) {
    this.id = genid()
    this.description = description
    this.completedAt = null
  }
}

module.exports = Task