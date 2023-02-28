const md5 = require('md5');
const { User } = require('../database/models');

const findUser = async ({ name, email }) => {
  const result = await User.findAll({
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
  if (userAlreadyExists) return { message: 'Nome ou Email já existem!' };

  const hashedPassword = md5(password);

  const result = await User.create({ name, email, password: hashedPassword, role });
  const user = {
    id: result.id,
    name: result.name,
    email: result.email,
    role: result.role,
  };
  return user;
};

module.exports = { register, findUser };
