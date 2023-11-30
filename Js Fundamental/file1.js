//file1.js

// const file2 = require('./file2')
//let arr = [2,3,4,54,10,4,5,7,4,6];
//console.log(file2.xyz());

//filter why we use in javaScript ?
/* let arr = [2,3,4,54,10,4,5,7,4,6];
const result = arr.filter((item)=>{
    return item == 4
})
console.log(result);//[4, 4, 4] */
//-------------------------------------------------------

// print EvenNumer from array.
let array = [1, 2, 3, 5, 6, 7, 10];

const evenNumber = array.filter((number)=>{
    return number%2 == 0;
})
console.log(evenNumber);

// Using Arrow Function.
const evenNumber2 = array.filter(array => array%2 == 0);
console.log(evenNumber2);