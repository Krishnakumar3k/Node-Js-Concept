const { log } = require('console');
const express = require('express');
const app = express();
app.get('', (req,res)=>{
    console.log('Hi there Developer', req.query);

    res.send(`
    <h1>Hello dev This is Home page</h1>
    <a href="/about">Go to About Page</a>
    `);
})

app.get('/about', (req,res)=>{
    res.send(`
    <input type="text" placeholder="Enter Your Name" value ="${req.query.name}" />
    <button>Click Me</button>
    <a href="/">Go to home page</a>
    ` );
})

app.get('/help', (req,res)=>{
    res.send(
//         {
//     name : "Krishna",
//     email : 'kk@gmail.com'
// }
[
    {
        name : "Krishna",
        email : 'kk@gmail.com'
    },
    {
        car : "Audi",
        model : 'A150DZ2023',
        price : "60L"

    }
]
    );
})

app.listen(2000);


 