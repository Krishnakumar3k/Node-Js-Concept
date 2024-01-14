const {MongoClient} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient; //or
//const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';


const database = 'e-comm';
const client = new MongoClient(url);
async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
   let response = await collection.find({}).toArray(); //find() it is use to find all data from the db find({name:'m 11'})
   console.log(response);
}
getData();
