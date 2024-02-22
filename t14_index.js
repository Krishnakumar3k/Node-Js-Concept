const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");//db connection
    const productSchema = new mongoose.Schema({  // Schema it use to validation inside a db and also for field property.
        name:String,
        price : Number,
        brand: String,
        category: String
    });
    const productsModel = mongoose.model('products', productSchema);
    let data = new productsModel({
        name: "Google Pixle 7",
        price : 500 ,
        brand: "Google",
        category: "Moblie"

         });
    let result = await data.save();
    console.log(result);
}
main();





