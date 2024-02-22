const express = require('express');
 require('./p2_config');
 const product = require('./p2_product');

 const app = express();
 app.use(express.json()); // parse it is convert the data in to json
 app.post("/create",async(req, res)=>{
    let data = new product(req.body)
    let result = await  data.save(); 
    res.send(result);
    console.log(result)
 })  

  //Get method using mongoose for geting data.
  app.get('/list',async(req,res)=>{
    let data = await product.find();
    res.send(data)
  })

  //Delete method for delete data from mongoDB
  app.delete('/delete/:_id', async(req,res)=>{
    console.log(req.params)
    let data = await product.deleteOne(req.params)
    res.send(data)
  })

// Put method for update data By id
app.put('/update/:_id', async(req,res)=>{
    console.log(req.params)
    let data = await product.updateOne(
        
            //{}condition
           req.params,
           {$set:req.body }

            //$set update data
        
    )
    res.send(data)
})

 app.listen(5000, ()=>{
    console.log("server is running");
 })

