const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Flash_Card', {
    slno: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lineno: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kanji: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Read_Method: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Meaning: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Flash_Card',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "slno" },
        ]
      },
    ]
  });
};
