const exp = require('express');
const route = exp.Router();

let teachers = [];

route.get('/',function(req,res){
    res.send(teachers);
});

route.post('/',function(req,res){
    teachers.push({
        name : req.body.name
    });
    res.send({
        message : 'success',
        id : teachers.length
    });
})

module.exports = route;