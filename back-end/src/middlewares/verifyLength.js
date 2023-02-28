const verifyName = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 12) {
    return res.status(406).send({ message: 'Nome precisa ter pelo menos 12 caracteres!' });
  }
  next();
};

const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(406).send({ message: 'Senha precisa ter pelo menos 6 caracteres!' });
  }
  next();
};

module.exports = { verifyName, verifyPassword };