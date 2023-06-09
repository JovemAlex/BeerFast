const productService = require('../services/productService');

const getAllProducts = async (_req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    return res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllProducts };
