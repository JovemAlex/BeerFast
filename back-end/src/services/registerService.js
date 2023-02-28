const { User } = require('../database/models');
const md5 = require('md5');

const register = async (data) => {
  const { name, email, password, role } = data;
  const hashedPassword = md5(password);
  const user = await User.create({ name, email, password: hashedPassword, role });
  return user;
};

module.exports = { register };
