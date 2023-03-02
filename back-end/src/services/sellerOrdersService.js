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

const updateStatus = async (id, newStatus) => {
  const updated = await Sale.update(
    { status: newStatus },
    { where: { id } },
  );
  return await getOrderById(id);
};

module.exports = { getOrderById, updateStatus };
