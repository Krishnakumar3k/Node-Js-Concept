 module.exports =  reqFilter = (req,res,next)=>{
    // console.log('reqFilter');
    if(!req.query.age){
        res.send("You are Under Age ");
    }
    else if(req.query.age<18){
        res.send("You can not access this page");
    }
    else{
        next();
    }
    
    
}