const express = require('express')
const morgan  = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const colors = require('colors')
const dotenv = require('dotenv')
const connect_to_DB = require('./config/database.js')
const errorHandler = require('./middleware/errorMiddleware.js')

//routes path
const authRoutes = require('./routes/authRoute.js')

const PORT = process.env.PORT || 8080

//API Routes
app.use('/api/v1/auth', authRoutes);

//dotenv configure
dotenv.config()

//connection to database
connect_to_DB();

//rest object
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(morgan('dev'))
app.use(errorHandler)

//listen server
app.listen(8080, () => {
    console.log(`Server is running in ${process.env.DEV_MODE} on port ${PORT}`.bgBlue.white);
});