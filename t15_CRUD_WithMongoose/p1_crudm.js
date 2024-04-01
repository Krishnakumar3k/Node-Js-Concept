const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-comm");//db connection

const productSchema = new mongoose.Schema({  // Schema it use to validation inside a db and also for field property.
    name:String,
    price : Number,
    brand: String,
    category: String
});
 // Save or Create new data in DB.
const saveInDb = async ()=>{    
    const product = mongoose.model('products', productSchema);
    let data = new product({
        name: "Google Pixle 7",
        price : 700 ,
        brand: "Google", 
        category: "Moblie"

         });
    let result = await data.save();
    console.log(result);
}
saveInDb();

/* ======================================================================================= */
//Update Data using mongoose in mongodb.
const updateInDb = async ()=>{
    const product = mongoose.model('products', productSchema);
    let data = await product.updateOne(
        {name:"iphone 15",}, //data name which we are updating
        {
            $set:{price:700, name: 'iphone 14'} 
        }
    )
    console.log(data)

}
updateInDb();

/* ======================================================================== */
//Delete Data using mongoose in mongodb.
const deleteInDb = async()=>{
    const product = mongoose.model('products', productSchema);
    let data = await product.deleteOne({name: "iphone 12"});
    console.log(data);
}
deleteInDb();

/* ======================================================================== */
//Find or read data using mongoose in mongodb
const findIndDb = async ()=>{
    const product = mongoose.model('products',productSchema);
   // let data = await product.find();
    let data = await product.find({name : 'iphone 13'});
    console.log(data)
}
findIndDb();
