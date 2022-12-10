'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Accesories',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Action Figures',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Collectible',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cosplay Costumes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Electricals & Tech',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marvel Clothing',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {}
};