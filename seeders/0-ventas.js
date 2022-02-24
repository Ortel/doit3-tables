module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ventas', [{
      title: 'Venta 1',
      //imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      modelo: 'Ford Torino',
      clienteId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Venta 2',
      //imageUrl: 'https://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png',
      modelo: 'Audi A7',
      clienteId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Venta 3',
      //imageUrl: 'https://expressjs.com/images/express-facebook-share.png',
      modelo: 'Lamborghini Diablo',
      clienteId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Venta 4',
      //imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png',
      modelo: 'Mercedes 200',
      clienteId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ventas', null, {});
  }
};
