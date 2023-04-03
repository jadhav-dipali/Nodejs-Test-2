const express = require("express")
const app = express();
const ejs = require("ejs");
require("./db/connection");
const Info = require("./model/model")

app.set("view engine" , "ejs");
app.use(express.urlencoded({extended:true}))


app.get("/" ,async(req,res)=>{
    try{
      let readData = await Info.find();
      res.render("index" ,{readData});
    }catch(err){
        res.status(400).send(err.message)
    }

})

app.post("/" , async(req,res)=>{
    try{
      let data = new Info(req.body);
      const createdata = await data.save();
      res.redirect("/");
    }catch(err){
        res.status(400).send("not valid data")
    }
})

app.get("/form" ,(req,res)=>{
    res.render("form" )
})

app.listen(3000 , ()=>{
    console.log("listening  port  3000")
})