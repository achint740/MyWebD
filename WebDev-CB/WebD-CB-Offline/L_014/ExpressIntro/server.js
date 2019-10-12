const exp = require('express');
var app = exp();

app.get("/",function(req,res){
    res.send("Hello");
});

//Get request is an asynchronous function
//Order Matters
app.get("/:name",function(req,res){
    var x = req.params.name;
    res.send("U r Cool  " + x + " boi");
});

app.get("*",function(req,res){
    res.send("Not found");
});

app.listen(5500,function(req,res){  //Port Number > 1024
    console.log("Server Started");
});