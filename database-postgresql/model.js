const Sequelize = require('sequelize');
const db = require('./index.js');

const Product = db.define('product', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  rating: Sequelize.STRING,
  reviews: Sequelize.INTEGER,
  price: Sequelize.REAL
}, {
  timestamps: false
})

const Image = db.define('image', {
  product_id: Sequelize.INTEGER,
  colors: Sequelize.ARRAY(Sequelize.STRING),
  urls: Sequelize.ARRAY(Sequelize.STRING),
  thumbnails: Sequelize.ARRAY(Sequelize.STRING)
}, {
  timestamps: false
})

const Size = db.define('size', {
  product_id: Sequelize.INTEGER,
  size: Sequelize.STRING,
  in_stock: Sequelize.INTEGER,
}, {
  timestamps: false
})

Product
  .sync({ force: false })
  .then(() => console.log('Products table has been created.'))
  .catch((err) => console.error('Products table could not be created.', err));

Image
  .sync({ force: false })
  .then(() => console.log('Image table has been created.'))
  .catch((err) => console.error('Image table could not be created.', err));

Size
  .sync({ force: false })
  .then(() => console.log('Size table has been created.'))
  .catch((err) => console.error('Size table could not be created.', err));

module.exports = { Product, Image, Size }