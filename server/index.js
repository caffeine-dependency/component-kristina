const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
// const db = require('../database-mongodb/index');
const db = require('../database-postgresql/index');
const Model = require('../database-postgresql/model');

const app = express();
const port = 2002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/viewer/products', (req, res) => {
  let randomIndex = Math.floor(Math.random() * 100) + 1;
  db.findOne({ index: randomIndex })
    .then((item) => {
      res.status(200).send(item);
    })
    .catch((err) => {
      res.status(404).send('Error getting item :(');
    }
    );
})

// // For backend testing purposes - Mongo
// app.get('/api/all', (req, res) => {
//   db.find({})
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(404).send('Could not get all items')
//     })
// })

// app.get('/api/:id', (req, res) => {
//   var { id } = req.params;
//   db.findOne({ index: id })
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(404).send('Could not get all items')
//     })
// })

// For backend testing purposes - PostgreSQL
app.get('/api/products/:id', (req, res) => {
  var { id } = req.params;
  db.query(`SELECT * FROM products where id=${id}`)
    .then(([data, metadata]) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send('Could not get all items')
    })
})

app.get('/api/images/:id', (req, res) => {
  var { id } = req.params;
  db.query(`SELECT * FROM images where product_id=${id}`)
    .then(([data, metadata]) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send('Could not get all items')
    })
})

app.get('/api/sizes/:id', (req, res) => {
  var { id } = req.params;
  db.query(`SELECT * FROM sizes where product_id=${id}`)
    .then(([data, metadata]) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send('Could not get all items')
    })
})

app.get('/api/:id', (req, res) => {
  var { id } = req.params;
  db.query(`SELECT * FROM products INNER JOIN images on images.product_id = products.id WHERE products.id=${id}`)
  // db.query(`SELECT * FROM products INNER JOIN sizes on sizes.product_id = products.id WHERE products.id=${id}`)
    .then(([data, metadata]) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send('Could not get all items')
    })
})

// app.get('/api/all', (req, res) => {
//   Model.Product.findAll({})
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(404).send('Could not get all items')
//     })
// })

// app.get('/api/:id', (req, res) => {
//   var { id } = req.params;
//   Model.Product.findOne({ where: { index: id } })
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(404).send('Could not get item')
//     })
// })