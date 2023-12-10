const express = require('express');
const { rotasLogin} = require('./routas/index');
// ...
const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', rotasLogin.rota);

module.exports = app;
