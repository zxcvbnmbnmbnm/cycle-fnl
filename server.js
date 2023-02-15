const express=  require("express")
const ejs = require("ejs")
const app = express()

app.set("view engine", "ejs");
let id = 2

const data =[
    {name:"james",roll:"324"},
    {name:"black",roll:"123"}
]


app.get("/data",(req,res)=>{
    res.send(JSON.stringify(data))
})


app.get("/dataa",(req,res)=>{
    res.send(JSON.stringify({name:"new name",roll:id++}))
})

app.get("*",(req,res)=>{
    res.render("index")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("server listing on final build",PORT);
})