const express = require('express')
const app = express()
const port = 3001
const path = require('path')
const menus = require('../database/models.js');
var expressStaticGzip = require('express-static-gzip');
const db = require('../database/index.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

///restaurants/menu_cart, expressStaticGzip(path.join(__dirname, '../public'
//serve the client
app.use(expressStaticGzip(path.join(__dirname, '../public'), {
    enableBrotli: true,
    orderPreference: ['br', 'gz']
 }))

//set up router
// app.use('/api', routers)

app.get('/api/menu', (req, res) => {
    const randomid = Math.floor(Math.random() * (625000 - 562500 + 1)) + 562500;
    menus.find({ restaurant_id: randomid })
        .then((data) => res.status(200).send(data))
        .catch((err)=> res.status(404).send(`get menu request failed ${err}`))
})

//cron task (this runs the seeder every midnight at 1am)
// new CronJob('* * * * * *', tester, null, true, 'America/Los_Angeles');

app.get('/', (req, res) => {
    client.query('SELECT NOW()', (err, results) => {
        console.log(err, res)
        client.end()
      })
})


app.listen(port, () => console.log(`App listening on port ${port}!`))