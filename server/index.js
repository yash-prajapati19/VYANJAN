const express = require('express')
const app = express()
const connectDB = require('./db/connection')
require('dotenv').config()
const cors = require('cors')
const routing = require('./routes/routing');


app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5000'
}))

app.use('/', routing)

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

start()