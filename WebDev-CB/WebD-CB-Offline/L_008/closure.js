
// let x=0;

function outerFun(){
    let x=0;
    function innerFun(){
        x++;
        return x;
    }
    return innerFun;
}

let f1 = outerFun();
let f2 = outerFun();
let f3 = outerFun();
console.log(f1());
console.log(f1());
console.log(f1());
console.log(f2());
console.log(f2());
console.log(f3());
console.log(f3());
console.log(f3());

function out1(){
    let x=0;
    function in1(){
        x++;
        function in2(){
            x++;
            return x;
        }
        return in2;
    }
    return in1;
}

let m = out1();
let n1 = m();
let n2 = m();
console.log(n1());
console.log(n1());
console.log(n1());
console.log(n2());
console.log(n2());

console.log(new Date.getTime());

function waitASec(){
    let start_t = new Date.getTime();
    while(new Date.getTime()<(start_t+1000)){

    }
}

function runafter_n(fun,n){
    for(let i=0;i<n;i++){
        waitASec();
    }
    fun();
}

function funw(){
    console.log("Running....");
}

runafter_n(funw,50);