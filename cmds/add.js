const store = require('../lib/store')
const {reduce, trim } = require('ramda')
const ls = require('./ls')

//$ todo add This is some text
module.exports = function(arrText) {
  console.log('hurray, im inside the add function!')
  // text -- This is some text
  // todos is the array of todos from the json file that we get() from the store.
  const todos = store.get()
  const newTodo = createTodo(arrText, todos.length)
  const newTodos = append(newTodo, todos)
  store.set(newTodos)

  return ls()


  // add the todo item into the array within memory.
  function append(value, arr) {
    return [...arr, value]
  }

  function join(sep, arrWords) {
    return reduce(
      function(acc, value) {
        return trim( `${acc}${sep}${value}`)
      },
      '',
      arrWords
    )
  }

  function createTodo(arrText, id) {
    return { text: join(' ', arrText), completed: false, id: id + 1 }
  }
}
