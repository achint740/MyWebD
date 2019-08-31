
function sayHi(){
    console.log("Hello EveryOne");
}
var interval_ID;
var count=0;
function timer(t){
    function dec(){
        count++;
       if(count>10){
        clearInterval(interval_ID);
        console.log("0\nBuzz");
        console.log("Time Up!!");
       }
       if(count<=10){
        console.log(t--);
       }
    }
    return dec;
}

//Functions can be defined inside setInterval as well

console.log("Starting Timer...");
//setTimeout(sayHi,1000);
//setTimeout(sayHi,1000); 

//Both will execute after 1000ms = 1s
//Using timeout we can delay the execution 
//By the reqd. time 

//setInterval(sayHi,1000);

//After every 1000ms = 1s 
//sayHi function would be executed

//Let's try setting a timer of 10s

var currenttime = timer(10);
interval_ID = setInterval(currenttime,1000);