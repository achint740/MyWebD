
function a1(){
    console.log("Call the Manager");
    a2();
}

function a2(){
    console.log("Call connected to Manager");
    console.log("Connect to The Worker Union Head");
    a3();
}

function a3(){ 
    console.log("Conference Call Successful");
}

a1();


//  | a3 |
//  | a2 |
//  | a1 |
//  |____| 

//Function Call Stack is shown Above