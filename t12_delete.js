const dbConnect = require('./t9_mongodb');
const deleteData = async ()=>{
    let data = await dbConnect();
    let result = await data.deleteMany({name : 'iphone 14'})
    console.log(result);
    if(result.acknowledged){
        console.log("data deleted");
    }
}
deleteData();