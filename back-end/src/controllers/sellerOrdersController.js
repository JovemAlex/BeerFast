const sellerOrdersService = require('../services/sellerOrdersService');

const getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await sellerOrdersService.getOrderById(id);
    return res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

module.exports = { getOrderById };
