const exp = require('express');
const app = exp();

const routes = {
    teachers : require('./Routes/teachers'),
    courses : require('./Routes/courses')
};

app.use(exp.json());
app.use(exp.urlencoded({extended:true}));

app.use('/teachers',routes.teachers);
app.use('/courses',routes.courses);

app.listen(5500,function(req,res){
    console.log('Server Started');
})