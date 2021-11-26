const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(req, res, next) {
  res.json(req)
}

app.post('/users', (req, res) => {
  res.json(req)
});

app.get('/todos', checksExistsUserAccount, (req, res) => {
  res.json(req)
});

app.post('/todos', checksExistsUserAccount, (req, res) => {
  res.json(req)
});

app.put('/todos/:id', checksExistsUserAccount, (req, res) => {
  res.json(req)
});

app.patch('/todos/:id/done', checksExistsUserAccount, (req, res) => {
  res.json(req)
});

app.delete('/todos/:id', checksExistsUserAccount, (req, res) => {
  res.json(req)
});

module.exports = app;