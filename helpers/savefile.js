const fs = require('fs');
const saveData = (data) => {
  const fileName = './db/data.json'
  fs.writeFileSync(fileName, JSON.stringify(data))
}

module.exports = {
  saveData
}