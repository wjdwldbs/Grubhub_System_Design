const mongoose = require('mongoose');
// const password = require('./atlas_password.js');
mongoose.connect('mongodb://localhost/menu', {poolSize: 20});
// , {poolSize: 20}
// mongodb://localhost/menu   if you want to seed locally
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb database!!!!!!')
});

module.exports = db; 

// 'mongodb://localhost/reis'
// `mongodb+srv://hackreactortest:${process.env.PASSWORD}@cluster0-k0vmg.mongodb.net/test?retryWrites=true`