# todo-cli-mrboogieknight

A command line interface used to track to do items in a software project. Use the cli to create todo items, list todo items, mark a todo item as complete, and remove a todo item.

## Installation
```
npm i todo-cli-tripott -g

```
## Usage

```
mkdir




## Commands

### initialize todo list

creates a **todos.json** file within the current directory, Use when you wish to stare a new list. If **todos.json**already exists, 'todo init' will not do anything

### Add a todo

Adds a todo item to your list of todos.

```
todo add <some text>
```

**Example**

```
todo add feed the cat
```

### List todos

List all todos in your todo list.

```
todo-cli-mrboogieknight ls
```

### Mark todo complete

Toggle a todo item as completed by providing the specific todo id.

```
todo-cli-mrboogieknightcheck <TODO ID GOES HERE>
```

**Example**

Marks the 2nd todo item as complete or not complete if it is complete.

```
todo-cli-mrboogieknight check 2
```

### Remove todo

delete s a specific todo by providing the todo id.

```
todo-cli-mrboogieknight rm <TODO ID GOES HERE>
```

**Example**

```
todo-cli-mrboogieknightrm 1
```

## Future Features

* Show percent of todos completed
* Assign a todo to a person
* Record the data and time completed
* Export the todo items to github as issues.
* Export to trello as a list
