const { username, password } = require('./postgreSQL-token');

const Sequelize = require('sequelize');
const db = new Sequelize('product', username , password, {
  host: 'localhost',
  dialect: 'postgres'
});

db
  .authenticate()
  .then(() => console.log('Sequelize has now connected to the database.'))
  .catch(() => console.error('Sequelize was unable to connect to the database.'));

  module.exports = db;