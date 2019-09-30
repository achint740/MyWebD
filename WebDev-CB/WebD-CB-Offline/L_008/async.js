function fun1(){
    console.log("running");
}

// setTimeout(function(){
//     fun1();
// },2000);

let id = setInterval(function(){
    fun1();
},1000);

setTimeout(function(){
    clearInterval(id);
}, 5000);
