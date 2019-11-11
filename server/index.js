const express = require('express')
const app = express()
const port = 3001
// const routers = require('./routers.js')
const path = require('path')
const menus = require('../database/models.js');
//const cors = require('cors')
var expressStaticGzip = require('express-static-gzip');
//const CronJob = require('cron').CronJob;
// const tester = require('../database/seeder.js')

//require middleware
//const morgan = require("morgan")

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

//set up router
// app.use('/api', routers)

// menus.find({restaurant_id: id})
app.get('/api/menu', ({params}, res) => {
    //const { id } = req.params
    //var randomID = Math.floor(Math.random() * (10000000 - 9000000 + 1)) + 9000000;
    //menus.find({item_id: id})
    //console.log(randomID)
    //db.products.aggregate([
//   {$match: {category:"Electronic Devices"}}, // filter the results
//   {$sample: {size: 5}} // You want to get 5 docs
// ]);

        //data.sort(function(a, b){return 0.5 - Math.random()});
        //var randomResults = data.slice(0, numOfResults)
    var numOfResults = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    //console.log(numOfResults)
    
    //var randomid = Number(`${params.id}`)
    var randomid = Math.floor(Math.random() * (500000 - 450000 + 1)) + 450000;
    //menus.find({restaurant_id:randomid})
    //menus.aggregate([{$match: {restaurant_id: randomid}}])
    //menus.find({restaurant_id: params.id})

    menus.find({restaurant_id: randomid})
        .then((data) => res.status(200).send(data))
        .catch((err)=> res.status(404).send(`get menu request failed ${err}`))
    // menus.find({restaurant_id: params.id}).limit(20)
    // .then((data) => 
    //     //data.sort(function(a, b){return 0.5 - Math.random()});
    //     //var randomResults = data.slice(0, numOfResults)
    //     res.status(200).send(data)
    // )
    // .catch((err)=> res.status(404).send(`get menu request failed ${err}`))
})
//I'm working on optimizing aggregate queries in Mongoose. Hoping to start on Postgres today.
// app.post('api/menu', (req, res) => {
//     menus.create({
//       item_id: Number,
//       restaurant_id: Number,
//       item_name: String,
//       food_photo: String,
//       description: String,
//       price: Number,
//       popular: Boolean,
//       special_instruction: Boolean,
//       extras: {
//         type: [
//           {
//             name: String,
//             price: Number
//           }
//         ],
//         default: undefined
//       }
//     })
// })

//cron task (this runs the seeder every midnight at 1am)
// new CronJob('* * * * * *', tester, null, true, 'America/Los_Angeles');

app.get('/', (req, res) => {
    client.query('SELECT NOW()', (err, results) => {
        console.log(err, res)
        client.end()
      })
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))