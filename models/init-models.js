var DataTypes = require("sequelize").DataTypes;
var _Flash_Card = require("./Flash_Card");

function initModels(sequelize) {
  var Flash_Card = _Flash_Card(sequelize, DataTypes);


  return {
    Flash_Card,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
