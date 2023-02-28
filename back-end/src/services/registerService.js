const { User } = require('../database/models');

const register = async (data) => {
  const { name, email, password, role  } = data;
  const user = await User.create({name, email, password, role});
  return user;
}

module.exports = { register }