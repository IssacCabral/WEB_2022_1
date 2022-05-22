'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('professors', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      university: {
        type: Sequelize.STRING,
        allowNull: false
      },
      degree: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
        field: 'createdAt'
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
        field: 'updatedAt'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('professors');
  }
};
