const express = require('express')
const app = express()
const port = 3000
// const routers = require('./routers.js')
const path = require('path')
const menus = require('../database/models.js')

//require middleware
var morgan = require("morgan")

//use middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))

//serve the client
app.use('/restaurants/:resto',express.static(path.join(__dirname, '../public')))

//set up router
// app.use('/api', routers)

app.get('/restaurants/:resto/api/menus', (req, res) => {
    menus.find({restaurant_id: req.params.resto})
    .then((data)=>{res.status(200).send(data)})
    .catch((err)=>{
        console.log('error in get menus!!', err)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))