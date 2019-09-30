function add(arr){
    let n = arr.length;
    let c = Number(0);
    for(let i=0;i<n;i++){
        let x = Number(arr[i]);
        c = c + x*x;
    }
   return Math.sqrt(c);
}

function add1(arr){
    let n = arr.length;
    let c = Number(0);
    for(let i=0;i<n;i++){
        let x = Number(arr[i]);
        if(x>0)
            c = c + x*x;
    }
   return Math.sqrt(c);
}

function add2(arr){
    let n = arr.length;
    let c = Number(0);
    for(let i=0;i<n;i++){
        let x = Number(arr[i]);
        if(x<0)
            c = c + x*x;
    }
   return Math.sqrt(c);
}

$('#do').on('click',function(){
    // alert('Connected!'); 
    let text = $('#inp').val();
    // alert("the text is : " + text);  
    let arr = text.split(' ');
    let ans = add(arr);
    let ans1 = add1(arr);
    let ans2 = add2(arr);
    $('h2').css('color','green');
    $('#rms').append(ans);
    $('#prms').append(ans1);
    $('#nrms').append(ans2);
});