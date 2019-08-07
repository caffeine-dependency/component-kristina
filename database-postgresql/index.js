const { username, password, host } = require('./postgresql-token');

const Sequelize = require('sequelize');
const db = new Sequelize('product', username , password, {
  host: host,
  dialect: 'postgres'
});

db
  .authenticate()
  .then(() => console.log('Connected to postgreSQL'))
  .catch((err) => {
    console.log(err);
    console.error('Sequelize was unable to connect to the database.')
  });

  module.exports = db;