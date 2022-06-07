const mongoose = require("mongoose")

const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/doko')
        console.log("Database connected successfully")
    } catch (err) {
        console.error(err)
    }
}

module.exports = connectDatabase