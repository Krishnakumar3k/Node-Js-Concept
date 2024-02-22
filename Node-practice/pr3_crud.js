const fs = require('fs')
const path = require('path')

//create
const dirPath = path.join(__dirname,"crud")
const filepath = `${dirPath}/data.txt`;
fs.writeFileSync(filepath,"This is text file for doing crud operation");


//read file
// fs.readFile(filepath,"utf8",(err,item)=>{
//     console.log(item)
// })

//update
// fs.appendFile(filepath," file name is data.txt",(err)=>{
//     if(!err){
//         console.log("file is upadated");
//     }
// })

//Rename file
// fs.rename(filepath,`${dirPath}/alldata.txt`,(err)=>{
//     if(!err){
//         console.log("file Renamed is Done");
//     }
// })
//delete file
fs.unlinkSync(`${dirPath}/alldata.txt`)

