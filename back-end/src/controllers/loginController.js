const loginService = require('../services/loginService');
// const { User } = require('../database/models');

const login = async (req, res, next) => {
  try {
    const auth = await loginService.authenticateToken(req.body);
    if (auth.type === 'USER_NOT_FOUND') {
      return res
        .status(404)
        .json({ message: 'Not found' });
    }

    // req.user = auth;

    // const user = await User.findOne({
    //   where: {email:req.body.email}
    // })

    return res.status(200).json({ ...auth });
    // return res.status(200).json({ token: auth.token, role: auth.role });
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const email = req.user;
    const role = await loginService.getUser(email);

    return res.status(200).json({ role });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  getUser,
};
