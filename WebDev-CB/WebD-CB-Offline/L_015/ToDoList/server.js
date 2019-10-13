const exp = require('express');
const app = exp();

app.use(exp.json());
app.use(exp.urlencoded({extended:true}));

app.use('/',exp.static(__dirname + '/public'));

let todos = [];  //Name and Priority

app.get('/todos',function(req,res){
    res.send(todos);
});

app.post('/todos',function(req,res){
    // console.log(req.body.name);
    todos.push({
        name : req.body.name,
        priority : +(req.body.priority || 1)
    });
    res.send({
        todoID : todos.length,
        success : "true"
    });
});

app.listen(5500,function(req,res){
    console.log('Server Started');
});