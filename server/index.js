const express = require('express')
const app = express()
const connectDB = require('./db/connection')
require('dotenv').config()
const cors = require('cors')
const routing = require('./routes/routing');
const cookieParser = require('cookie-parser')

// app initialization

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5000'
}))

// routes

app.use('/', routing)


// serving on port
// and connecting to database

const port = 5000

const start = async() => {
  await connectDB(process.env.MONGO_URI)
    .then(()=>{
      console.log('Database Connected')
      app.listen(port, ()=>{
        console.log(`Server is listening on port ${port}...`)
      })
    })
    .catch((err)=>{
      console.log(err);
    })
}

// app.listen(port, ()=>{
//   console.log(`Server is listening on port ${port}...`)
// })

start()