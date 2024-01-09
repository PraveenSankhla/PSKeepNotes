const pskeepmodel = require("../Models/KeepnoteModel")

// Get all product
const GetnotesfromDB = async(req, res)=>{
    try{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        const data = await pskeepmodel.find()
        res.json(data);
        // console.log(data)
    }
    catch(error){
        res.json(error)
        console.log(error)
    }
}

const Savenotes = async(req, res)=>{
    try{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        console.log(req.body)
        let saveData =  new pskeepmodel();
        saveData.id = req.body.id;
        saveData.content = req.body.content
        saveData.heading = req.body.heading;
        const data = await saveData.save();
        res.json(data);
        console.log(data)
    }
    catch(error){
        res.json(error)
        console.log(error)
    }
}


const DeleteData = async(req, res)=>{
    try{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        console.log(req.body)
        const data = await pskeepmodel.deleteOne({id : req.body.id});
        res.json(data);
        console.log(data)
    }
    catch(error){
        res.json(error)
        console.log(error)
    }
}

module.exports = {GetnotesfromDB, Savenotes, DeleteData};