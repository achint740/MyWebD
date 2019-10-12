//Relative nhi
//predefined
const fs = require('fs');  
const path = require('path'); 
// console.log(__dirname); 

//Multiple reads
//Multiple write not possible

let file = path.join(__dirname,'/Hello.txt');

fs.readFile(
    file,
    {encoding:'utf8'}, //By default NULL
    (err,data)=>{
        if(err) throw new Error('COuldnt Read')
        else console.log(data) //OR data.toString()
    })

fs.writeFile(
    __dirname + '/Hello.txt',
    "Hello World",
    {encoding:'utf8',
     flag:'w'},
    (err)=>{
        if(err) throw err
        else    console.log('File Written Successfully');
    }
)

console.log('execution in ....');