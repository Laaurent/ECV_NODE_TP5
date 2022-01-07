"use strict";
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Comments", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.UUID,
         },
         content: {
            type: Sequelize.TEXT,
         },
         date: {
            type: Sequelize.DATE,
         },
         author: {
            type: Sequelize.UUID,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("Comments");
   },
};
