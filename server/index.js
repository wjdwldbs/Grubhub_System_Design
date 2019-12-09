const express = require('express')
const app = express()
const port = 3001
const path = require('path')
const menus = require('../database/models.js');
var expressStaticGzip = require('express-static-gzip');
const db = require('../database/index.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(expressStaticGzip(path.join(__dirname, '../public'), {
    enableBrotli: true,
    orderPreference: ['br', 'gz']
 }))

app.get('/api/menu/:id', ({params}, res) => {
    menus.find({ restaurant_id: params.id })
        .then((data) => res.status(200).send(data))
        .catch((err)=> res.status(404).send(`GET menu request failed ${err}`))
})

app.get('/', (req, res) => {
    client.query('SELECT NOW()', (err, results) => {
        console.log(err, res)
        client.end()
      })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))