const customerOrderService = require('../services/customerOrderService');

const getSaleById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const sale = await customerOrderService.getById(id);
        return res.status(200).json(sale);
    } catch (err) {
        return next(err);
    }
};

const updateStatusEntregue = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await customerOrderService.updateStatus(id, 'entregue');
    return res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

const getOrdersByUser = async (req, res, next) => {
  try {
    const { email } = req.user;
    const allOrders = await customerOrderService.getAllOrdersBySeller(email);
    return res.status(200).json(allOrders);
  } catch (error) {
    next(error);
  }
};

module.exports = { 
    getSaleById,
    updateStatusEntregue,
    getOrdersByUser,
};
