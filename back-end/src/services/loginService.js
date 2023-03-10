const crypto = require('crypto');
const { User } = require('../database/models');
const { createToken } = require('../auth/jwtFunctions');

const authenticateToken = async ({ email, password }) => {
  const hash = crypto.createHash('md5').update(password).digest('hex');
  const user = await User.findOne({
    details: ['id', 'email'],
    where: { email, password: hash },
  });

  if (!user) return { type: 'USER_NOT_FOUND' };
  const token = createToken(user.dataValues.email, user.role);
  return { token, role: user.role, name: user.name, email: user.email };
};

const getUser = async (email) => {
  const { role } = await User.findOne({
    where: { email },
  });
  return role;
};

module.exports = {
  authenticateToken,
  getUser,
};
