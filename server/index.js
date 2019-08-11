const express = require('express');
const bodyParser = require('body-parser');
// const morgan = require('morgan');                       // Comment out when deployed
const path = require('path');
// const db = require('../database-mongodb/index');        // Comment out when using psql
const db = require('../database-postgresql/index');
// const Model = require('../database-postgresql/model');  // Comment out when deployed

const app = express();
const port = 2002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(morgan('dev'));                                 // Comment out when deployed
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/viewer/products', (req, res) => {
  let randomIndex = Math.floor(Math.random() * 100) + 1;
  db.query(
    `SELECT 
      products.id,
      products.name,
      products.description,
      products.rating,
      products.reviews,
      products.price,
      json_build_object(
        'colors', images.colors,
        'thumbnails', images.thumbnails,
        'url', images.urls
      ) AS images,
      (SELECT 
        array_agg(
          json_build_object(
            'size', sizes.size,
            'in_stock', sizes.in_stock
          )
        ) AS sizes
      FROM sizes WHERE sizes.product_id = ${randomIndex})
    FROM products
    INNER JOIN images ON images.product_id = products.id
    AND products.id=${randomIndex}`)
    .then(([data, metadata]) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send('Could not get all items');
    })
})

// Update for Loader.io testing
app.get('FILL ME IN', (req, res) => {
  res.status(200).send('FILL ME IN');
});

// // For backend testing purposes - Mongo
// app.get('/api/mongo/all', (req, res) => {
//   db.find({})
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(404).send('Could not get all items')
//     })
// })

// app.get('/api/mongo/:id', (req, res) => {
//   var { id } = req.params;
//   db.findOne({ index: id })
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(404).send('Could not get all items')
//     })
// })

// // For backend testing purposes - PostgreSQL
// app.get('/api/sql/:id', (req, res) => {
//   var { id } = req.params;
//   db.query(
//     `SELECT 
//       products.id,
//       products.name,
//       products.description,
//       products.rating,
//       products.reviews,
//       products.price,
//       json_build_object(
//         'colors', images.colors,
//         'thumbnails', images.thumbnails,
//         'url', images.urls
//       ) AS images,
//       (SELECT 
//         array_agg(
//           json_build_object(
//             'size', sizes.size,
//             'in_stock', sizes.in_stock
//           )
//         ) AS sizes
//       FROM sizes WHERE sizes.product_id = ${id})
//     FROM products
//     INNER JOIN images ON images.product_id = products.id
//     AND products.id=${id}`)
//     .then(([data, metadata]) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(404).send('Could not get all items');
//     })
// })