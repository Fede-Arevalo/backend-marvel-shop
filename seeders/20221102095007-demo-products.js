"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        name: "Thanos Infinity Stones Ring",
        price: 15.99,
        description:
          "Available now and also on sale the Thanos Infinity Stone ring is made with high-quality zinc alloy and also great quality colours.",
        img_product: "default/seeder-product1.jpg",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Iron Man Mark 46 Half Bust",
        price: 210.75,
        description:
          "It is a collectible bust. With its all weight of 3kg and 35cm high this Iron Man half bust is also an iconic product.",
        img_product: "default/seeder-product2.jpg",
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Thor Hammer Mjolnir",
        price: 330.75,
        description:
          "Full metal thor hammer movie replica - marvelofficial.com. With his total weight of 5.8 kg, this full metal Thor hammer is the closer prop replica that you can find. 1:1 scale life-size of the original Thor hammer used in the movie.",
        img_product: "default/seeder-product3.jpg",
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marvel Captain America Mask",
        price: 59.99,
        description:
          "Captain America wearable mask prop replica and scale 1:1 life size",
        img_product: "default/seeder-product4.jpg",
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Apple AirPods Pro Case Marvel Characters",
        price: 14.75,
        description:
          "Light weight AirPods Pro Case Marvel Characters. Also high quality, non-toxic and environment friendly silicone material.",
        img_product: "default/seeder-product5.jpg",
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marvel Logo White T-Shirt",
        price: 23.75,
        description: "100% cotton and high-quality Marvel logo print.",
        img_product: "default/seeder-product6.jpg",
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marvel Funko POP Iron Spider",
        price: 29.99,
        description:
          "Cute and also funny this Funko POP Iron Spider will take the Avengers: Infinity War power wherever you will place it.",
        img_product: "default/seeder-product7.jpg",
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Avengers A Logo Keychain",
        price: 12.75,
        description:
          "All our Marvel Keychain are made with 100% high-quality, resistant and no-toxic material.",
        img_product: "default/seeder-product8.jpg",
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
