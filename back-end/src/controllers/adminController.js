const adminService = require('../services/adminService');

const register = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await adminService.register(data);
  
    if (result.message) return res.status(409).send(result);

    return res.status(201).json({ ...result });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { register };
