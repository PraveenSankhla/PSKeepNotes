const mongoose = require('mongoose')

const KeepNotes = new mongoose.Schema({
    id : Number,
    heading : String,
    content : String,
})

module.exports = mongoose.model("pskeep", KeepNotes)