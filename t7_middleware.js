const express  = require('express');
cons = reqFilter = require('./t7_midware2');
const app = express();
const route = express.Router();

//app.use(reqFilter);//Application route
route.use(reqFilter);
app.get('/',(req,res)=>{
    res.send("Welcome to Homepage");
})
app.get('/users',(req,res)=>{
    res.send("Welcome to Users-Page");
})

route.get('/about',(req,res)=>{
    res.send("Welcome to About-Page");
})

route.get('/contact',(req,res)=>{
    res.send("Welcome to Contact-Page");
})
app.get('/help',(req,res)=>{
    res.send("Welcome to Help-Page");
})
app.use('/',route);
app.listen(1000);






