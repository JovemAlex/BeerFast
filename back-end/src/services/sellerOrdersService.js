const { Sale, SaleProduct, Product, User } = require('../database/models');

const findUser = async (email) => {
  const [result] = await User.findAll({
    where: { email },
  });
  // console.log(result);
  return result;  
};

// const getOrderById = async (id/* , email */) => {
//   // const { dataValues } = await findUser(email);
//   // console.log(dataValues.id);

//   const order = await Sale.findOne({
//     where: { /* sellerId: dataValues.id, */ id },
//     include: [{
//       model: SaleProduct,
//       // required: true, 
//       as: 'saleId', // alterar no model para salesProducts
//       include: [{
//         model: Product,
//         required: true,
//         as: 'productId', // alterar no model para product
//       }],
//     }],
//   });

//   return order;
// };

const getOrderById = async (id) => {
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
// const { Sale, SaleProduct, User, sequelize } = require('../database/models');

// const getById = async (id) => {
  // const sale = await Sale.findByPk(id);
  // return sale;
};

const updateStatus = async (id, newStatus) => {
  await Sale.update(
    { status: newStatus },
    { where: { id } },
  );
  return getOrderById(id);
};

const getAllOrdersBySeller = async (email) => {
  const { id } = await findUser(email);
  const allOrders = await Sale.findAll({
    where: { sellerId: id },
  });
  const orderDataValues = allOrders.map((order) => order.dataValues);
  return orderDataValues;
};

module.exports = { getOrderById, updateStatus, getAllOrdersBySeller, findUser };
