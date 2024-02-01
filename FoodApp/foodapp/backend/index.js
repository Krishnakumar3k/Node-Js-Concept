const express = require('express')
const app = express()
//mongoDb();
const port = 5000;
const mongoDb = require("./db");
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, ()=>{
  console.log(`App listening on port 5000 ${port}`);
})