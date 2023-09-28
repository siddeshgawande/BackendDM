const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require("dotenv").config();

const app = express()

// used for logging on the console
app.use(morgan('combined'))
app.use(express.json())
app.use(cors({
  origin:"https://backenddm-production.up.railway.app"
}))
app.use(express.static('uploads'))

// add the routers
const routerUser = require('./routes/user')
const routerProduct = require('./routes/product')
const routerOrder = require('./routes/orders')
const routerCart = require('./routes/cart')

app.use('/user', routerUser)
app.use('/product', routerProduct)
app.use('/order', routerOrder)
app.use('/cart', routerCart)

app.listen(5000 || process.env.PORT, () => {
  console.log('Server started at port 5000')
})
