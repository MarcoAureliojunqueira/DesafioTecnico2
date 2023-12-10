const { User } = require('../models/user.model');

const loginPost = async ({ email, password }) => {
  const login = await User.findOne({ where: { email, password } });
  return login;
};

module.exports = {
  loginPost,
};
