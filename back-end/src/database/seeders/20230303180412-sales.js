'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('sales', [
    {
      user_id: 3,
      seller_id: 2,
      total_price: 10,
      delivery_address: 'rua do administrator',
      delivery_number: '77',
      sale_date: '2023-03-03',
      status: 'pendente',
    },
    {
      user_id: 3,
      seller_id: 2,
      total_price: 15,
      delivery_address: 'rua do consumidor',
      delivery_number: '88',
      sale_date: '2023-03-03',
      status: 'pendente',
    }], {});

  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
