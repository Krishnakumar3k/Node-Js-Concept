//
const dbConnect = require('./t9_mongodb');

const updateData =async ()=>{
    let data =await dbConnect();
    //console.log(data);
    let result = await  data.updateMany(
        
            {name:'iphone 13'},
            {
                $set:{name:'iphone 15', price: '400'}
            }
        
    );
    console.log(result)
}
updateData();