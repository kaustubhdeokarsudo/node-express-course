const express = require('express')
const app = express()

app.get('/users',function(req,res){
    res.json({
        success:true,
        message:'successfully got users, nice!',
        users:[{name:'mark'},{name:'jill'}]
    })
})

app.get('/users/:id',function(req,res){
    console.log(req.params.id);
    res.json({
        success:true,
        message:'successfully got users, nice!',
        user:req.params.id
    })
})

app.listen(8000,function(){
    console.log("Server is listening");
})