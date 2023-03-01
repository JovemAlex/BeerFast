const { loginSchema } = require('../utils/schema');

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (email === '' || password === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return next();
};

module.exports = {
  validateLogin,
};
