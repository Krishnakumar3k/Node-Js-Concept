//Read Data from MongoDB
const {MongoClient} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient; //or
//const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';


const database = 'e-comm';
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
//    let response = await collection.find({}).toArray(); //find() it is use to find all data from the db
//    console.log(response);
}
dbConnect().then((resp)=>{
console.log(resp.find().toArray);
})
//console.log(dbConnect())
