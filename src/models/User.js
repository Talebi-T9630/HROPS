// models/User.js

const { DataTypes,Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const UserModel = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_company_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
    
});

module.exports = UserModel;
