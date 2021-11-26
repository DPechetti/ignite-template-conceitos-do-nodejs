const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(req, res, next) {
  const { username } = req.headers;

  const foundUser = users.find(user => user.username === username)

  if (!foundUser) return res.status(404).json({ error: 'Mensagem do erro' })

  req.user = foundUser

  next()
}

app.post('/users', (req, res) => {
  const { name, username } = req.body

  const userCreated = {
    id: uuidv4(),
    name,
    username,
    todos: []
  }

  users.push(userCreated);

  res.status(201).json(userCreated)
});

app.get('/todos', checksExistsUserAccount, (req, res) => {
  const { todos } = req.user

  res.json(todos)
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