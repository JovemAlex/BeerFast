'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales_products', [{
    sale_id: 1,
    product_id: 3,
    quantity: 2,
  },
  {
    sale_id: 1,
    product_id: 2,
    quantity: 4,
  },
  {
    sale_id: 2,
    product_id: 10,
    quantity: 3,
  },
  {
    sale_id: 2,
    product_id: 7,
    quantity: 1,
  },
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales_products', null, {});
  }
};
