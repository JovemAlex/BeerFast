const sellerOrdersService = require('../services/sellerOrdersService');

const getOrderById = async (req, res, next) => {
  const { email } = req.user;
  try {
    const { id } = req.params;
    console.log('id no controller: ', id);
    const order = await sellerOrdersService.getOrderById(id, email);
    return res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

const getAllOrdersBySeller = async (req, res, next) => {
  const { email } = req.user;
  try {
    const allOrders = await sellerOrdersService.getAllOrdersBySeller(email);
    return res.status(200).json(allOrders);
  } catch (err) {
    next(err);
  }
};

const updateStatusPendente = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await sellerOrdersService.updateStatus(id, 'Pendente');
    return res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

const updateStatusPreparando = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await sellerOrdersService.updateStatus(id, 'Preparando');
    return res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

const updateStatusEmTransito = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await sellerOrdersService.updateStatus(id, 'Em Trânsito');
    return res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

module.exports = { 
  getOrderById, 
  updateStatusPendente, 
  updateStatusPreparando, 
  updateStatusEmTransito,
  getAllOrdersBySeller,
};
