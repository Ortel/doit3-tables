'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ventas', {
      id: {
        allowNull:     false,
        autoIncrement: true,
        primaryKey:    true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      //imageUrl: {
      //  type: Sequelize.STRING
      //},
      modelo: {
        type: Sequelize.TEXT
      },
      clienteId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Clientes',
          key:   'id',
          as:    'clienteId',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ventas');
  }
};
