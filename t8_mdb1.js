const dbConnect = require("./t9_mongodb")
// dbConnect().then((resp)=>{
// resp.find().toArray().then((data)=>{
//     console.log(data);
// })
// });
//console.log(dbConnect())

//oR

const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
}
main();