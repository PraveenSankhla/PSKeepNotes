const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors')
const bodyParser = require("body-parser")
const port = process.env.port;

// db connection
const MongoDb = require('./DBConnection')
MongoDb();


//get routes :
const KeepNotes = require('./Routes/KeepnoteRoute');


// middleware
app.use(cors())
// app.use(express.static("public"))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


// route frontend
app.use('/', KeepNotes)

// app.get('/', async (req, res)=>{
//     res.send("Hello Praveen Sankhla");
// })


app.listen(port,()=>{
    console.log(`hello from port ${port}`);
})