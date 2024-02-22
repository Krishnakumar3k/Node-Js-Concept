const express = require("express")
const EventEmitter = require("events"); //EventEmitter it is a class. that's why it is declare first letter with capital E = EventEmitter 
const app = express();

const event = new EventEmitter();

let count=0;
event.on("countAPI",()=>{
    count++;
    console.log("event called",count)
})
app.get("/",(req,res)=>{
    res.send("api is called")
    event.emit("countAPI")
})

app.get("/search",(req,res)=>{
    res.send(" Search api is called")
})


app.get("/update",(req,res)=>{
    res.send(" Update api is called")
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
})

