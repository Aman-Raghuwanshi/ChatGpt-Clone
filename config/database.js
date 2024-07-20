const mongoose = require('mongoose')
const colors = require('colors')

const connect_to_DB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDB database ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`MongoDB database error ${error}`.bgRed.white);
    }
};

module.exports = connect_to_DB