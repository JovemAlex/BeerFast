const registerService = require('../services/registerService');

const register = async (req, res) => {
  const data = req.body;
  const result = await registerService.register({ ...data, role: 'customer' });

  return res.status(201).json(result);
};

module.exports = { register };
