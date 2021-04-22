'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Customers', [
       {
       name: 'Dodit',
       userName: 'doditdatdit',
       address: 'mars',
       email: "dodit@mails.com",
       noMobilePhone: '082111223344',
       dateIn: new Date(),
       password: '1234',
       createdAt: new Date(),
       updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Customers', null, {});
  }
};
