const crypto = require('crypto');
const { Op } = require('sequelize');
const { User } = require('../database/models');
const { createToken } = require('../auth/jwtFunctions');

const findUser = async ({ name, email }) => {
  const [result] = await User.findAll({
    where: {
      [Op.or]: [{ name }, { email }],
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

  const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

  const result = await User.create({ name, email, password: hashedPassword, role });
  return createToken(result.email);
};

module.exports = { register, findUser };