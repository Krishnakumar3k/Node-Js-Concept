const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,"files")
for(let i=1; i<=3; i++){
    fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple file");
}

//Read file from the folder
fs.readdir(dirPath,(err,files)=>{
   // console.log(files)
    files.forEach((item)=>{
        console.log("file name is", item)
    });
})