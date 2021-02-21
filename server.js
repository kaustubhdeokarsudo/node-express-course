const express = require('express')
const app = express()

app.get('/users',function(req,res){
    res.json({
        success:true,
        message:'successfully got users, nice!',
        users:[{name:'mark'},{name:'jill'}]
    })
})


app.listen(8000,function(){
    console.log("Server is listening");
})