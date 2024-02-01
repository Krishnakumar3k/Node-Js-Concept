const dbConnect = require('./t9_mongodb');
const insert = async ()=>{
    const db = await dbConnect();
    //console.log(db)
    const result = await db.insertMany(
        [
            {name: 'iphone 12', brand: 'Apple', price: 250, category: 'mobile' },
            {name: 'iphone 13', brand: 'Apple', price: 300, category: 'mobile' },
            {name: 'iphone 14', brand: 'Apple', price: 350, category: 'mobile' }
        ]
     );
    // console.log(result)
    if(result.acknowledged){
        console.log("Data is Inserted");
    }
}
insert();


