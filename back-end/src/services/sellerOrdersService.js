const { Sale, SaleProduct, Product } = require('../database/models');

const getOrderById = async (id) => {
  const order = await Sale.findOne({
    where: { id },
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

module.exports = { getOrderById };
