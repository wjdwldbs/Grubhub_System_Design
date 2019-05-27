const express = require('express')
const app = express()
const port = process.env.PORT||3100
// const routers = require('./routers.js')
const path = require('path')
const menus = require('../database/models.js')
var cors = require('cors')

//require middleware
var morgan = require("morgan")

//use middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))


//serve the client
app.use('/restaurants/menu_cart/',express.static(path.join(__dirname, '../public')))

//set up router
// app.use('/api', routers)

app.get('/api/data/:id', (req, res) => {
    const { id } = req.params
    menus.find({restaurant_id: id})
    .then((data)=>{res.status(200).send(data)})
    .catch((err)=>{
        console.log('error in get menus!!', err)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))