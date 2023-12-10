const loginServ = require('../services/Login-services');
const { createToken } = require('../utils/Jwt');

const loginPost = async (req, res) => {
  const { email, password } = req.body;
  const login = await loginServ.loginPost({ email, password });

  if (!login) {
    res.status(400).json({ message: 'Invalid fields' });
  } else {
    const { password: _, ...userData } = login.dataValues;
    const payload = {
      token: userData,
    };
    const Token = createToken(payload);
    res.status(200).json({ token: Token });
  }
};
module.exports = {
  loginPost,
};