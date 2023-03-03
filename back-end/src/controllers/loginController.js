const loginService = require('../services/loginService');

const login = async (req, res, next) => {
  try {
    const auth = await loginService.authenticateToken(req.body);
    if (auth.type === 'USER_NOT_FOUND') {
      return res
        .status(404)
        .json({ message: 'Not found' });
    }

    req.user = auth;

    return res.status(200).json({ token: auth.token, role: auth.role });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
