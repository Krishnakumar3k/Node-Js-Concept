const express = require('express');
const path = require('path'); // it s use access the folder by path
const app = express();
const publicPath = path.join(__dirname, 't4_public')
app.use(express.static(publicPath));  // static method use to load static content. And // use method/function it is  express js function
//console.log(publicPath);
app.listen(5000);





//----------------------------------------------------------------------
//http://localhost:5000/about.html