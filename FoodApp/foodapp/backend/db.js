const mongoose = require('mongoose');

const mongoDb = async ()=>{
    const url = 'mongodb://127.0.0.1:27017';
//mongoose.connect('mongodb://127.0.0.1:27017/test');
await mongoose.connect(url,{useNewUrlParser:true},(err,result)=>{
    console.log("connected mdb");
});
}
module.exports = mongoDb;

