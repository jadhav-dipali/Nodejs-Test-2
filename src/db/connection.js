const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/info")
.then(res=>console.log("connected"))
.catch("not connected")