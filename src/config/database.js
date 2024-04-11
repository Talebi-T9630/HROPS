const mysql = require('mysql2');
const environment = process.env.NODE_ENV || 'local';
const config = require(`./config.${environment}`);
const { Sequelize } = require('sequelize');

const host = config.dbconfig.host;
const user =config.dbconfig.user;
const password = config.dbconfig.password;
const database =config.dbconfig.database;     


  const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: 'mysql'
  });

  async function connectToDatabase() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  connectToDatabase();
  module.exports=sequelize;