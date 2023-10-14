'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Users.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "email already exists in database!" },
      validate: {
        isEmail: { msg: "Email is not valid" }
      }
    },
    gender: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["Construction Worker", "Engineer", "Architect", "Electrician"]],
          msg: "Please specify user role"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
  });

  return Users;
};
