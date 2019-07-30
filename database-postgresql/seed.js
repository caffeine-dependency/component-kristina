const Model = require('./model.js');
const { exampleProductData, exampleImageData, exampleSizeData } = require('./exampleData.js');

Model.Product
  .bulkCreate(exampleProductData)
  .then(() => console.log('Example products have been loaded'))
  .catch((err) => console.error('Example products could not be loaded:', err));

Model.Image
  .bulkCreate(exampleImageData)
  .then(() => console.log('Example images have been loaded'))
  .catch((err) => console.error('Example images could not be loaded:', err));

Model.Size
  .bulkCreate(exampleSizeData)
  .then(() => console.log('Example sizes have been loaded'))
  .catch((err) => console.error('Example sizes could not be loaded:', err));
