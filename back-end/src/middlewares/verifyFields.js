const userSchema = require('../utils/userSchema');
const userAdminSchema = require('../utils/userAdminSchema');


const verifyFields = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(406).send({ message: 'All fields are required!' });
  }
  next();
};

const verifyRegisterUserByAdmin = (req, res, next) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    return res.status(406).send({ message: 'All fields are required!' });
  }
  next();
};

const verifyRegisterData = (req, res, next) => {
  const data = req.body;
  const { error } = userSchema.validate(data);
  console.log(error)
  if (error !== undefined) return res.status(406).json({ message: error.details[0].message });
  next();
};

const verifyAdminRegisterData = (req, res, next) => {
  const data = req.body;
  const { error } = userAdminSchema.validate(data);
  console.log(error)
  if (error !== undefined) return res.status(406).json({ message: error.details[0].message });
  next();
};

module.exports = { verifyFields, verifyRegisterUserByAdmin, verifyRegisterData, verifyAdminRegisterData };
