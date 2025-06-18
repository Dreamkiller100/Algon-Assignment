import open from 'open';
import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
//const open = require('open');

const app = express();
app.use(bodyParser.json());

let todos = [
  { id: 1, task: 'Buy groceries', done: false },
  { id: 2, task: 'Do homework', done: true }
];
let lastId = 2;

const FILE_PATH = 'todos.json';

// Load from file if it exists
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

// Get all todos
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// Get a specific todo
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).send('Not Found');
  res.status(200).json(todo);
});

// Create a new todo
app.post('/todos', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).send('Missing title or description');
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

// Update a todo
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).send('Not Found');
  const updated = { ...todos[index], ...req.body, id };
  todos[index] = updated;
  saveToFile();
  res.status(200).json(updated);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).send('Not Found');
  todos.splice(index, 1);
  saveToFile();
  res.status(200).send('Deleted');
});

// Fallback route
app.use((req, res) => {
  res.status(404).send('Route Not Found');
});

import { exec } from 'child_process';

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}/todos`);
  exec(`start chrome http://localhost:${PORT}/todos`);
});
