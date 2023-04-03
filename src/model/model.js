const mongoose = require("mongoose")

const SchemaInfo= mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    city:String,
    profession:String

})

const Info = new mongoose.model("Info" , SchemaInfo)
module.exports=Info