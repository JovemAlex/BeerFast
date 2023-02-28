const md5 = require('md5');
const { User } = require('../database/models');
const { createToken } = require('../auth/jwtFunctions');

const findUser = async ({ name, email }) => {
  const [result] = await User.findAll({
    where: {
      name,
      email,
    },
  });
  
  return result;
};

const register = async (data) => {
  const { name, email, password, role } = data;

  const userAlreadyExists = await findUser({ name, email });
  if (userAlreadyExists !== undefined) {
    return { message: 'Name or Email already registered!' };
  }

  const hashedPassword = md5(password);

  const result = await User.create({ name, email, password: hashedPassword, role });
  return createToken(result.email);
};

module.exports = { register, findUser };
