const Model = require('./model.js');
const exampleData = require('./exampleData.js');

Model.Product
  .bulkCreate(exampleData)
  .then(() => console.log('Example products has been loaded'))
  .catch((err) => console.error('Example products could not be loaded:', err));
