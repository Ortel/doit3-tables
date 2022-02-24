
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vehiculos', [{
      modelo: 'Ford Torino',
      año:  '1982',
      color: 'Rojo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelo: 'Audi A7',
      año:  '2015',
      color: 'Blanco',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelo: 'Lamborghini Diablo',
      año:  '2005',
      color: 'Rojo Rubí',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelo: 'Mercedes 200',
      año:  '2005',
      color: 'Negro',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vehiculos', null, {});
  }
};
