const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'seusecretdetoken';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};
const createToken = (payload) => jwt.sign(payload, TOKEN_SECRET, jwtConfig);

module.exports = {
  createToken,
};
