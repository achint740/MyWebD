const exp = require('express');
var app = exp();

app.get("/",function(req,res){
    res.send("Hello");
});

//Get request is an asynchronous function

//Order Matters
// app.get("/:name",function(req,res){
//     var x = req.params.name;
//     res.send("U r Cool  " + x + " boi");
// });

app.get("/greet",function(req,res){
    res.send(`Good-Day ${req.query.name}`);
});

app.get('/file',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get("/server.js",function(req,res){
    res.send(`console.log("Hello")`);
});

app.use('/staticfile',exp.static(__dirname+'/static'));

// app.get("*",function(req,res){
//     res.send("Not found");
// });

app.listen(5500,function(req,res){  //Port Number > 1024
    console.log("Server Started");
});