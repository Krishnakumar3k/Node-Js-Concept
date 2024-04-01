const os  = require('os');
//console.log(os);
console.log(os.arch()); // it provide the architecture of system x64, x32 etc
console.log(os.freemem()/(1024*1024*1024)) // it provides the free RAM available in the system. eg in Byte 1094184960 -> in GB 1.1459922790527344
 console.log(os.totalmem()/(1024*1024*1024))// Total RAM in system in GB -> 7.85479736328125
 console.log(os.hostname()) //LAPTOP-FPAFPBE9
// console.log(os.platform()) //win32
// console.log(os.userInfo())