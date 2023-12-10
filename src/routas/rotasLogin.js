const express = require('express');
const controler = require('../Controller/loginControler');
const { validEmailSenha } = require('../middlewares/validEmaileSenha');

const rota = express.Router();

rota.post('/', validEmailSenha, controler.loginPost);

module.exports = {
  rota,
};