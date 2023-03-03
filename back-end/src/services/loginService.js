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
  const token = createToken(user.dataValues.email);
  return { token, role: user.role };
};

module.exports = {
  authenticateToken,
};
