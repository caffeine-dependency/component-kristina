const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/Product', { useMongoClient: true })
  .then( () => {
    console.log('Connected to mongoDB') 
  })
  .catch( (err) => {
    console.log('Mongoose was unable to connect to the database.', err)
  })


const productSchema = mongoose.Schema({
  index: Number, // each item will be given a unique integer index
  name: String,
  description: String,
  rating: String, // stars, out of 5
  reviews: Number, // number of total reviews on product
  price: Number,
  sizes: [ { size: String, in_stock: Number } ],
  images: { thumbnails: [ String ], urls: [ String ], colors: [ String ] }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;