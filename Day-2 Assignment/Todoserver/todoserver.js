const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

let todos = [];
let lastId = 0;

// Load from file if exists
const FILE_PATH = 'todos.json';
if (fs.existsSync(FILE_PATH)) {
  const fileData = fs.readFileSync(FILE_PATH);
  todos = JSON.parse(fileData);
  if (todos.length > 0) {
    lastId = Math.max(...todos.map(todo => todo.id));
  }
}

// Save todos to file
function saveToFile() {
  fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
}

// GET /todos - Get all todos
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// GET /todos/:id - Get todo by ID
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).send('Not Found');
  }
  res.status(200).json(todo);
});

// POST /todos - Create new todo
app.post('/todos', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).send('Bad Request: Missing title or description');
  }
  const newTodo = {
    id: ++lastId,
    title,
    description,
    completed: false
  };
  todos.push(newTodo);
  saveToFile();
  res.status(201).json({ id: newTodo.id });
});

// PUT /todos/:id - Update todo
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(t => t.id === id);
  if (todoIndex === -1) {
    return res.status(404).send('Not Found');
  }
  const existing = todos[todoIndex];
  const updated = { ...existing, ...req.body, id };
  todos[todoIndex] = updated;
  saveToFile();
  res.status(200).json(updated);
});

// DELETE /todos/:id - Delete todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).send('Not Found');
  }
  todos.splice(index, 1);
  saveToFile();
  res.status(200).send('Deleted');
});

// Handle all other routes
app.use((req, res) => {
  res.status(404).send('Route Not Found');
});

module.exports = app;
