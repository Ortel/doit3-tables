'use strict';
const {
  Model
} = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Venta extends Model {
//     static associate(models) {
//       // define association here
//     }
//   }
//   Venta.init({
//     title: DataTypes.STRING,
//     //imageUrl: DataTypes.STRING,
//     modelo: DataTypes.TEXT,
//     clienteId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Venta',
//   });
//   return Venta;
// };

module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    firstName: DataTypes.STRING,
    lastName:  DataTypes.STRING,
    //email:     DataTypes.STRING,
    //password:  DataTypes.STRING
  }, {});
  Cliente.associate = function (models) {
    // associations can be defined here
    Cliente.hasMany(models.Venta, {
      foreignKey: 'clienteId'
    })
  };
  return Cliente;
};
