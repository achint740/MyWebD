function add(x){
    let a = x.split(')');
    // console.log(a[0]);
    let n = a[0].length;
    if(n==1){
        //Do Something
        return Number(0);
    }
    let y = a[0].substring(1,n);
    a.shift();
    return Number(y) + Number(add(a.join(')')));
}

let y = '(1)(2)(345)()';
let ans = add(y);
console.log(ans);

function ADD(val){
    function help(nextVal){
            if(typeof nextVal == 'undefined'){
                return val;
            }
            val+=nextVal;
            return help;
        }
    return help;
}

console.log(ADD(1)(2)(4)());