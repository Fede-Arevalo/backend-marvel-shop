"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Reviews", [
      {
        content: "Very well made, fit perfectly!",
        rating: 4,
        product_id: 1,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content:
          "I'm super satisfied with this product, perfect conditions and excellent package! highly recommended, it's a 5 stars for sure!",
        rating: 5,
        product_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content:
          "I bought this metal Thor hammer for my boyfriend's birthday and he is very happy about this product. The hammer is made out of real metal and it's quite heavy. Arrived after 28 days. Thank you guys!",
        rating: 5,
        product_id: 6,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "Good.",
        rating: 3,
        product_id: 3,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "Very Good!",
        rating: 2,
        product_id: 5,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content:
          "Good quality marvel tee. Fit perfectly! Love it!",
        rating: 4,
        product_id: 4,
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content:
          "I bought one and got it today,it takes about a month to get your product how ever the quality is quite nice.",
        rating: 1,
        product_id: 7,
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content:
          "Good.",
        rating: 1,
        product_id: 3,
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
