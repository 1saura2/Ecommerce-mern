const mongoose = require('mongoose')

const ratingSchema = mongoose.Schema({
    rate: {
        type: Number,
        min: 1
    },
    count: {
        type: Number,
        min: 0
    }
})

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: String,
    categoty: String,
    image: String,
    rating: ratingSchema

})

const Product = mongoose.model('Product', productSchema)

module.exports = Product



