const Sequelize = require('sequelize');
const db = require('./index.js');

const products = db.define('products', {
  index: Sequelize.INTEGER,
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  rating: Sequelize.STRING,
  reviews: Sequelize.INTEGER,
  price: Sequelize.REAL,
  sizes: Sequelize.ARRAY(Sequelize.JSON)
}, {
  timestamps: false
})

Products
  .sync({ force: false })
  .then(() => console.log('Products table has been created.'))
  .catch((err) => console.error('Products table could not be created.', err));

module.exports = { Products }