const crypto = require('crypto');
const { Op } = require('sequelize');
const { User } = require('../database/models');

const findUser = async ({ name, email }) => {
  const result = await User.findAll({
    where: {
      [Op.or]: [{ name }, { email }],
    },
  });

  return result;
};

const register = async (data) => {
  const { name, email, password, role } = data;

  const userAlreadyExists = await findUser({ name, email });
  if (userAlreadyExists.length !== 0) {
    return { message: 'Name or Email already registered!' };
  }

  const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

  await User.create({ name, email, password: hashedPassword, role });
  return { role, name, email };
};

module.exports = { register, findUser };
