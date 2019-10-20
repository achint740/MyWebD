const exp = require('express');
const app = exp();

//REST API RULES for Collections
//GET -- get the array
//POST -- Add 
//SIngle user
//GET -- 
//POST -- 
//PUT -- Replace
//PATCH -- Merge & OverWrite 

//Extended true other languages decoding possible now
app.use(exp.urlencoded({extended:true})); //decode the encoded urls
app.use(exp.json());

function m1(req,res,next){
    console.log('Running m1');
    if(req.query.m == 1){
        res.send('Welcome by m1');
    }
   else
        next() //becomes conditional now
}

function m2(req,res,next){
    console.log('Running m2');
    next()
}

function m3(req,res,next){
    console.log('Running m3');
    next()
}

//All middlewares running default 

app.use(m1);
app.use(m2);
app.use('/bye',m3); //Will run for all urls starting with /bye

app.get('/',function(req,res){
    console.log('/ request');
    res.send('Hello');
});

app.get('/bye',function(req,res){
    res.send('GoodBye');
});

app.post('/bye',function(req,res){
    console.log(req.body);
    res.send('We will meet again');
});

app.listen(5500,function(req,res){
    console.log('server started');
});