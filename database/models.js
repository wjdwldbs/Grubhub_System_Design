var mongoose = require("mongoose");
var db = require("./index");

// var extrasSchema = new mongoose.Schema({
//     name: String,
//     price: Number
// })

var menuSchema = new mongoose.Schema({
  item_name: String,
  description: String,
  price: Number,
  popular: Boolean,
  special_instruction: Boolean,
  extras: {
    type: [
      {
        name: String,
        price: Number
      }
    ],
    default: undefined
  },
  restaurant_id: Number,
  photo_URL: String
});

var menu = mongoose.model("menu", menuSchema);

module.exports = menu;
