//Create files inside a folder.
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'Files');

for (let i = 0; i < 5; i++) {
    fs.writeFileSync(dirPath+"/hello"+i+".txt", "a simple apple file");
}

// Read file from the folder.
 fs.readdir(dirPath,(err, Files)=>{
   // console.warn(Files);

// Read File one by one.
   Files.forEach((item)=>{
    console.log("file name is",item)
   });
 });