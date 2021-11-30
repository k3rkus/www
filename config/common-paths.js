const path = require('path');

module.exports = {
  outputPath: path.resolve(__dirname, '../', 'public'),
  root: path.resolve(__dirname),
  template: './dist/index.html',
  favicon: './dist/favicon.ico',
};
