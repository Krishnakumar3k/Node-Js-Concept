
let a = 10;
let b = 0;
//Asynchronous Handle Using Promise.
let dataTime = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //let b = 20; 
        resolve(20);
      },2000);
});
dataTime.then((data)=>{
    b = data;
    console.log(a+b);
});


