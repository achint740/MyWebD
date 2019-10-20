const exp = require('express');
const app = exp();

app.set('view engine','hbs');

app.use(exp.json());
app.use(exp.urlencoded({extended:true}));

let tasklist = [];

app.get('/tasks',function(req,res){
    res.render('todos',{
        title : 'Learn HBS',
        tasklist
    });
});

app.post('/tasks',function(req,res){
    tasklist.push({
        name : req.body.name,
        priority : +(req.body.priority)
    });
    res.redirect('/tasks');
});

app.listen(5500,function(req,res){
    console.log('Server started!');
});
