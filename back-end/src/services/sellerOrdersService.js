const { Sale, SaleProduct, Product, User } = require('../database/models');
const registerService = require('./registerService');

const getOrderById = async (id, email) => {
  const user = await registerService.findUser({ name: null, email }); // verificar se a query retorna o esperado
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

const updateStatus = async (id, newStatus) => {
  await Sale.update(
    { status: newStatus },
    { where: { id } },
  );
  return getOrderById(id);
};

const findUser = async (email) => {
  const [result] = await User.findAll({
    where: { email },
  });
  console.log(result);
  return result;  
};

const getAllOrdersBySeller = async (email) => {
  const { id } = await findUser(email);
  const allOrders = await Sale.findAll({
    where: { sellerId: id },
  });
  const orderDataValues = allOrders.map((order) => order.dataValues);
  return orderDataValues;
};

module.exports = { getOrderById, updateStatus, getAllOrdersBySeller };
