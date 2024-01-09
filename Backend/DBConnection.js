const mongoose = require('mongoose')
//const constring = "mongodb+srv://pk54451636465:Since-2016@praveen.5jvvqgm.mongodb.net/psdata?retryWrites=true&w=majority"
// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2
const MongoDb = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/PSKeep?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2")
    .then(() => {console.log("Connected")})
    .catch((err) => {console.log(err)})
}

module.exports = MongoDb;