const express = require('express');
const path = require('path'); // it s use access the folder by path
const app = express();
const publicPath = path.join(__dirname, 't4_public')
//app.use(express.static(publicPath));  // static method use to load static content. And // use method/function it is  express js function
//console.log(publicPath);
app.get('',(__, res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(__, res)=>{
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/help',(__, res)=>{
    res.sendFile(`${publicPath}/help.html`)
})

// If not matched any one of above
// Than show this page
app.get('*',(__, res)=>{
    res.sendFile(`${publicPath}/pnf404.html`)
})
app.listen(5000);



//-> File upload ? We can upload file in get method using sendFile.