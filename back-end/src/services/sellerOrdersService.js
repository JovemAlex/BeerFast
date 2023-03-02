const { Sale, SaleProduct, Product } = require('../database/models');
const registerService = require('./registerService');

const getOrderById = async (id, email) => {
  const user = await registerService.findUser({ name: null, email }); //verificar se a query retorna o esperado
  const order = await Sale.findOne({
    where: { sellerId: user.id, id },
    include: [{
      model: SaleProduct,
      required: true, 
      as: 'saleId', // alterar no model para salesProducts
      include: [{
        model: Product,
        required: true,
        as: 'productId', // alterar no model para product
      }],
    }],
  });

  return order;
};

const getAllOrdersBySeller = async (email) => {
  const { id } = await registerService.findUser({ name: null, email }); //verificar se a query retorna o esperado
  const allOrders = await Sale.findAll({
    where: { sellerId: id },
  });
  return allOrders;
};

module.exports = { getOrderById, getAllOrdersBySeller };
