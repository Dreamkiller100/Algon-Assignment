/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    if (index < 0 || index >= this.todos.length) {
      throw new Error("Invalid index");
    }
    this.todos.splice(index, 1);
  }

  update(index, updatedTodo) {
    if (index < 0 || index >= this.todos.length) {
      throw new Error("Invalid index");
    }
    this.todos[index] = updatedTodo;
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    if (index < 0 || index >= this.todos.length) {
      throw new Error("Invalid index");
    }
    return this.todos[index];
  }

  clear() {
    this.todos = [];
  }
}

const myTodo = new Todo();

myTodo.add("Buy groceries");
myTodo.add("Finish assignment");
myTodo.add("Call mom");

console.log("All Todos:", myTodo.getAll()); 

myTodo.update(1, "Finish math assignment");
console.log("Updated Todo at index 1:", myTodo.get(1)); 

myTodo.remove(0);
console.log("Todos after removal:", myTodo.getAll()); 

myTodo.clear();
console.log("Todos after clear:", myTodo.getAll()); 
