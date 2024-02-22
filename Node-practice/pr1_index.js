const fs = require('fs');
// console.log("This is fs module")
// fs.writeFileSync("hello.txt","Hello i am using fs module")
const input = process.argv;
fs.writeFileSync(input[2],input[3]);
