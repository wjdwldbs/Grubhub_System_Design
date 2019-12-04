const express = require('express')
const app = express()
const port = process.env.PORT||3001
const path = require('path')
//const cors = require('cors')
var expressStaticGzip = require('express-static-gzip');
//const morgan = require("morgan")
const pool = require('../database_pg/index.js')
//use middleware
//app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//app.use(morgan('dev'))

///restaurants/menu_cart, expressStaticGzip(path.join(__dirname, '../public'
//serve the client
app.use(expressStaticGzip(path.join(__dirname, '../public'), {
    enableBrotli: true,
    orderPreference: ['br', 'gz']
 }))
//  item_id: Number,
//   restaurant_id: Number,
//   item_name: String,
//   food_photo: String,
//   description: String,
//   price: Number,
//   popular: Boolean,
//   special_instruction: Boolean,
//   extras: {
//     type: [
//       {
//         name: String,
//         price: Number
//       }
//     ],
//     default: undefined
//   }
// {
//     "id": 294318,
//     "restaurant_id": 499920,
//     "food_photo": "https://pixabay.com/get/57e2d64b4d56ae14f6da8c7dda79367a143fd9e752516c48702878d6934fc158b9_640.jpg",
//     "description": "Beef koobide comes inside of baguette bread filled with our special sauce with lettuce, white and red cabbage and tomato.",
//     "price": "5.00",
//     "popular": false,
//     "special_instruction": true,
//     "extra_name": "Coleslaw",
//     "extra_price": "1.00"
// }
// var final = [];
//             for (var i = 0; i < results.row.length; i++){
//                 result
//                 for (var k = 0; k < final.length; k++){
//                     if (final[k].id === results[i].id){
//                         i++;
//                     }
//                 }
//                 final.push(results[i])
//             }
// Math.floor(Math.random() * (max - min + 1)) + min;



app.get(`/api/menu`, ({params}, res) => {
    var randomid = Math.floor(Math.random() * (500000 - 450000 + 1)) + 450000;
    //var entries = Math.floor(Math.random() * (20 - 5 + 1)) + 10 || 1;
    // var q = `select menu_item.id, menu_item.restaurant_id, menu_item.food_photo, 
    // menu_item.description, menu_item.price, menu_item.popular, menu_item.special_instruction, 
    // extra_item.extra_name, extra_item.extra_price from menu_item inner join extra_item on 
    // menu_item.restaurant_id=extra_item.restaurant_id where menu_item.restaurant_id=${params.id};`
    var q = `select * from menu_item join extra_item on menu_item.id=extra_item.dish_id where menu_item.restaurant_id=${randomid};`
    // var q = `select * from menu_item where restaurant_id=${randomid};`
    // var q = `select menu_item.id, menu_item.restaurant_id, menu_item.food_photo, 
    // menu_item.description, menu_item.price, menu_item.popular, menu_item.special_instruction, 
    // extra_item.extra_name, extra_item.extra_price from menu_item join extra_item on 
    // menu_item.id=extra_item.dish_id where menu_item.restaurant_id=${450000};`
    pool.query(q, (err, results) => {
        if (err){
            console.log(err);
            res.status(404).send(`unsuccessful get request ${err}`);
        } else {
            //console.log(results.rows.length)
            res.status(200).send(results.rows);
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))