function f(f1){
    console.log('F starts');
    setTimeout(function(){
        let res = 'r';
        f1(res);
    },3000);
}

f(function(res){
    console.log('F complete and result is ' + res);
});

