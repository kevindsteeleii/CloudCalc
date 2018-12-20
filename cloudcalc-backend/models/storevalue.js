'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoreValue = sequelize.define('StoreValue', {
    label: DataTypes.STRING,
    value: DataTypes.DECIMAL,
  }, {});
  StoreValue.associate = function(models) {
    // associations can be defined here
  };
  return StoreValue;
};