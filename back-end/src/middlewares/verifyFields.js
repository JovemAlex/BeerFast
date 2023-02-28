const userSchema = require('./userSchema');

const verifyFields = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(406).send({ message: 'All fields are required!' });
  }
  next();
};

const verifyRegisterData = (req, res, next) => {
  const data = req.body;
  const { error } = userSchema.validate(data);
  if (error !== undefined) return res.status(406).json({ message: error.details[0].message });
  next();
};

module.exports = { verifyFields, verifyRegisterData };