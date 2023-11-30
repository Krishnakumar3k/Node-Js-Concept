// const fs = require('fs');
// console.log("Hell Developer");
// fs.writeFileSync("hello.txt", "Hello Node Developer");

//----------------------------------
// create file with help of cmd or terminal
const fs = require('fs');
const input = process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}
else{
    console.log("invalid input");
}

