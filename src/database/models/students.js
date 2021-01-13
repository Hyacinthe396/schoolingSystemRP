"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    static associate(models) {}
  }
  students.init(
    {
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      birthdate: DataTypes.STRING,
      gender: DataTypes.STRING,
      tel: DataTypes.STRING,
      country: DataTypes.STRING,
      role: DataTypes.STRING,
      city: DataTypes.STRING,
      isRead: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "students",
    }
  );
  return students;
};
