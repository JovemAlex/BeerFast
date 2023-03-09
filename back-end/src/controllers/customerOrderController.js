const customerOrderService = require('../services/customerOrderService');
const sellerOrdersService = require('../services/sellerOrdersService');

const createSale = async (req, res, next) => {
  try {
    const { email, sellerId, totalPrice, 
      deliveryAddress, deliveryNumber, products } = req.body;

      const { id } = await sellerOrdersService.findUser(email);
      const saleId = await customerOrderService.create({
      userId: id,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
    }, products);
    console.log(saleId);
    return res.status(201).json({ saleId });
  } catch (err) {
    return next(err);
  }
};

const getSellers = async (_req, res, next) => {
  try {
    const allSellers = await customerOrderService.getSellers();
    return res.status(200).json(allSellers);
  } catch (err) {
    next(err);
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

module.exports = { 
  createSale,
  updateStatusEntregue,
  getSellers,
};
