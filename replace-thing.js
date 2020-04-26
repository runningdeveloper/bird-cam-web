const replace = require('replace-in-file');
require('dotenv').config()
const options = {
  files: 'www/index.html',
  from: /_prefix_/g,
  to: process.env.PREFIX,
};
replace.sync(options)
console.log('replaced')