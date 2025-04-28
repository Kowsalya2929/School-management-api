const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDB.js')
const schoolRoute = require('./routes/schoolRoute.js')

dotenv.config()

const app = express()
connectDB()

app.use(express.json())
app.use('/api/schools',schoolRoute)

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port : ${process.env.PORT}`)
})