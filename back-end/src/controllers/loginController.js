const loginService = require('../services/loginService');
const { User } = require('../database/models');

const login = async (req, res, next) => {
  try {
    const auth = await loginService.authenticateToken(req.body);
    if (auth.type === 'USER_NOT_FOUND') {
      return res
        .status(404)
        .json({ message: 'Not found' });
    }

    req.user = auth;

    const user = await User.findOne({
      where: {email:req.body.email}
    })

    return res.status(200).json({ 
      name:user.name,
      email:user.email,
      role:user.role,
      token: auth 
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
