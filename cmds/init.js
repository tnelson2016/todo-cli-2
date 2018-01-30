const fs = require('fs')

module.exports = function() {

  if (!fs.existsSync('./todos.json')) {
    fs.writeFileSync('todo.json', '[]')
  

  }

  return 'todos.json initialized. good times, good times.'

}
