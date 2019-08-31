
//Output would be
//21
//21
//The inner block(if) takes the scope of function

function alpha(){
    var a = 11;
    if(true){
        var a = 21;
        console.log(a);
    }
    console.log(a);
}

//Output would be 
//21
//11
//The updated value remains within that block only
//Means variables defined with let have scope of the block 
//only in which they are defined
//same holds for const

function beta(){
    let a = 11;
    if(true){
        let a = 21;
        console.log(a);
    }
    console.log(a);
}

console.log("Calling Alpha");
alpha();
console.log("Calling Beta");
beta();