// CRUD 
const fs = require('fs');
const path = require("path");
const dirpath = path.join(__dirname, 'CRUD');
const filepath = `${dirpath}/apple.txt`;
//create
// fs.writeFileSync(filepath, "This is simple text file");

//Read
// fs.readFile(filepath, 'utf8', (err,item)=>{
// console.log(item);
// });

//Update file
// fs.appendFile(filepath, "file name is apple.txt",(err)=>{
//     if(!err){
//         console.log(" file is updated");
//     }
// })

//Rename
// fs.rename(filepath, `${dirpath}/fruit.txt`, (err)=>{
//     if(!err){
//         console.log("file name is updated");
//     }
// });

//Delete
fs.unlinkSync(`${dirpath}/fruit.txt`);

