const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/menu', {poolSize: 20});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb database!!!!!!')
});

module.exports = db; 
