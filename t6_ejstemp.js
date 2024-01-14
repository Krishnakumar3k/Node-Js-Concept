const express = require('express');
const path = require('path'); // it s use access the folder by path
const app = express();
const publicPath = path.join(__dirname, 'views')
app.set('view engine', 'ejs');
//console.log(publicPath);
app.get('',(__, res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/profile',(__, res)=>{
   //res.render('profile');
   const user = {
    name : "Krishna",
    email : "kk@gmail.com",
    city : "Noida",
    skills : ['C++', 'js', 'react js', 'node js', 'html', 'css']
   }
   res.render('profile',{user})
})

app.get('/login',(__,res)=>{
    res.render('login');
})

app.get('/help',(__, res)=>{
    res.sendFile(`${publicPath}/help.html`)
})

app.get('*',(__, res)=>{
    res.sendFile(`${publicPath}/pnf404.html`)
})
app.listen(5000);

