const mongoose = require('mongoose');
const Product = require('../index.js');
// npm install csv-write-stream

// Product.collection.insertMany(seedDataGenerator(start, end), { ordered: false }, function (err, success) {
//   console.log(`seeded database with items ${start} to ${end}`);
// });

Product
  .insertMany()
  .then(() => {
    console.log('Database seeded!');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));

// ASYNC AWAIT - Seed 1 entry at a time
// async function seeder() {
//   for (var i = 1; i <= 10000000; i++) {
//     let item = new Product({
//       index: i,
//       name: nameGenerator(),
//       description: descriptionGenerator(),
//       rating: ratingGenerator(),
//       reviews: reviewsGenerator(),
//       price: priceGenerator(),
//       sizes: sizesGenerator(),
//       images: imagesGenerator()
//     })

//     await item
//       .save()
//       .then(success => { console.log(`Item ${i} has been seeded`); })
//       .catch(err => { console.log(`Item ${i} was not seeded`); });
//   }
//   mongoose.connection.close();
// }

// ASYNC AWAIT - Seed 100,000 entries at a time [Takes 50min]
// Uses seedDataGenerator(index)
// async function seeder() {
//   var start = 1;
//   var end = 0;
//   // for (var i = 1; i <= 100; i++) {
//     end += 100000;
//     await Product.insertMany(seedDataGenerator(start, end))
//     console.log(`seeded database with items ${start} to ${end}`);
//     start = end + 1;
//   // }
//   mongoose.connection.close();
// }
// seeder();