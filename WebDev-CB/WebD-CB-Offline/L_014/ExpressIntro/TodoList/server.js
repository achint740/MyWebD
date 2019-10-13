//Require Express
const exp = require('express');
const app = exp();

//The todos Array
let todos = [];  //Initially Empty

//Get Request for / --> Show TodoList Home Page
app.use('/',exp.static(__dirname + '/public'));

//Get Request for /todos -->Send the todos array/list
app.get('/todos',function(req,res){
    res.send(todos);
});

//Get Request for /addtodo -->Add a new todo
app.get('/addtodo',function(req,res){
    todos.push(req.query.newtodo);
    res.send("Success");
});

app.get('/delete',function(req,res){
    let y = req.query.del;
    let ans=-1;
    let n = todos.length;
    for(let i=0;i<n;i++){
        if(todos[i] == y){
            ans=i;
            break;
        }
    }
    let msg;
    if(ans == -1){
        msg = 'Not A Valid ToDo';
    }
    else{
        todos.splice(ans,1);
        msg = 'Successfully Deleted';
    }
    res.send(msg);
});

app.get('/update',function(req,res){
    let n = req.query.naya;
    let o = req.query.purana;
    let ans=-1;
    for(let i=0;i<todos.length;i++){
        if(todos[i]==o){
            ans=i;
            break;
        }
    }
    if(ans==-1){
        msg = 'Not A Valid Todo';
    }
    else{
        todos[ans]=n;
        msg = 'Successfully Updated';
    }
    res.send(msg);
})

//Listen call
app.listen(5500,function(req,res){
    console.log('Server Started');
});