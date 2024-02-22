const express = require('express');
const dbConnect = require('./t9_mongodb');
const mongodb = require('mongodb'); // using for delete method 
const app = express();

app.use(express.json()); // use middleware it use to get data from postman

//get method
app.get('/', async(req,resp)=>{
    let data =  await dbConnect(); // dbConnect() from mongodb file data connection
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)
   // resp.send({name :'Krishna'})
})
//post method
app.post('/', async (req,resp)=>{
    //console.log(req.body);
    resp.send({name:'Krishna'});
   let data =  await dbConnect()
   let result = await data.insertOne(req.body);
    //resp.send(req.body);
    resp.send(result);
    
 
})

app.put("/:name", async(req, resp)=>{
let data = await dbConnect();
let result = data.updateOne(
   // {name: req.body.name},
    {name: req.params.name},
    // {$set:{price:900}}
    {$set:req.body}
    )
resp.send({result: "updated"})
   // console.log(req.body)   
})

app.delete("/:id",async(req,res)=>{
    
    //console.log(req.params.id);
    const data = await dbConnect();  //database connect
    const result = await  data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})//delete data form database

    res.send(result);
})
app.listen(5000, ()=>{
    console.log("server is running");
});