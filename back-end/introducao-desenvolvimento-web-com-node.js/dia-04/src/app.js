const express = require('express');
const validateName = require('./middleware/middleware-name');
const validatePrice = require('./middleware/middleware-price');

const app = express();

app.use(express.json());
app.post('/activities', validateName, validatePrice, (_req, res, _next) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
})


module.exports = app;
