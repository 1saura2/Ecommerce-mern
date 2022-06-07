const express = require('express')
const app = express();
const hbs = require('hbs')
const path = require('path')
const connectDatabase = require('./database/connection')
const Product = require('./models/Products')

//Importing the routes from route folder
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register')
const productsRoutes = require('./routes/products');
const async = require('hbs/lib/async');

const staticPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, '/templates')
const partialsPath = path.join(__dirname, '/templates/partials')
connectDatabase();

//Serving static files
app.use('/public', express.static(staticPath))
//Setting view engine for our application
app.set('view engine', 'hbs')
//Setting the views folder , default is views
app.set('views', viewsPath)
//Letting the engine know where to look for partials files
hbs.registerPartials(partialsPath)


//If data is submitted from form, then it translates urlencoded data into object in req.body
app.use(express.urlencoded({ extended: false }))
//If data is submitted from Javascript axios, then it translates JSON data into object in req.body
app.use(express.json())

//Default route
app.get('/', async (req, res) => {
    const products = await Product.find()
    res.render('index', { products })
})
//Login route being exported from /routes/login.js
app.use('/login', loginRoutes)
//Register route being exported from /routes/register.js
app.use('/register', registerRoutes)
//Products route being exported from /routes/products.js
app.use('/api/products', productsRoutes)

//Handling all other routes by sending 404 Page Not Found
app.get("*", (req, res) => {
    res.sendStatus(404)
})

app.listen(8000, () => {
    console.log("Server is running at port 8000")
})
