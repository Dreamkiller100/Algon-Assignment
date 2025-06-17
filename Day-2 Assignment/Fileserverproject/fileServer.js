const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// 1. GET /files - Return list of files in ./files/
app.get('/files', (req, res) => {
  fs.readdir(path.join(__dirname, 'files'), (err, files) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }
    res.status(200).json(files);
  });
});

// 2. GET /file/:filename - Return content of a specific file
app.get('/file/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'files', req.params.filename);
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(404).send('File not found');
    }
    res.status(200).send(data);
  });
});

// 3. Handle all other routes
app.all('*', (req, res) => {
  res.status(404).send('Route Not Found');
});

module.exports = app;
