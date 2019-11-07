var mongoose = require("mongoose");
var db = require("./index");

var menuSchema = new mongoose.Schema({
  item_id: Number,
  restaurant_id: Number,
  item_name: String,
  food_photo: String,
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
  }
});

var menu = mongoose.model("menu", menuSchema);

module.exports = menu;
