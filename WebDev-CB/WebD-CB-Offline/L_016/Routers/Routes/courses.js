const exp = require('express');
const route = exp.Router();

let courses = [];

route.get('/',function(req,res){
    res.send(courses);
});

route.post('/',function(req,res){
    courses.push({
        subject : req.body.subject,
        name:req.body.name,
        lectures:req.body.lectures,
        teacher:req.body.teacher
    });
    res.send({
        message : 'Success'
    });
})

module.exports = route;