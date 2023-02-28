const verifyFields = (req, res, next) => {
  const { name, email, password/* , role */ } = req.body;
  if (!name || !email || !password) {
    return res.status(406).send('Os campos nome, email e senha são obrigatórios!');
  }
  next();
}

module.export = { verifyFields };