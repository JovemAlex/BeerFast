const { Sale, SaleProduct, Product, User } = require('../database/models');

const getById = async (id) => {
  const sale = await Sale.findOne({
    where: { id },
    include: [
      { model: User, as: 'seller', attributes: ['name'] },
      {
        model: SaleProduct,
        as: 'sale',
        attributes: ['quantity'],
        include: [{
        model: Product,
        as: 'product',
        attributes: { exclude: ['urlImage'] },
        }],
      },
    ],
  });
    
    return sale;
};

const updateStatus = async (id, newStatus) => {
  await Sale.update(
    { status: newStatus },
    { where: { id } },
  );
  return getById(id);
};

const findUser = async (email) => {
  const [result] = await User.findAll({
    where: { email },
  });
  return result.dataValues;  
};

const getAllOrdersBySeller = async (email) => {
  const { id } = await findUser(email);
  const allOrders = await Sale.findAll({
    where: { userId: id },
  });
  const orderDataValues = allOrders.map((order) => order.dataValues);
  return orderDataValues;
};

module.exports = { 
    getById,
    updateStatus,
    getAllOrdersBySeller,
};
