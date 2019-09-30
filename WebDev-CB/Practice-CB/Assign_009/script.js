$('#gen').on('click',function(){
    // alert('COnne');
    let n = $('#inp').val();
    if(n.length!=0){
        $('#inp').val("");
        // alert(n);
        for(let i=1;i<=n;i++){
            if(i%3==0)
                $('h3').append(" Fizz");
            else if(i%5==0)
                $('h3').append(" Buzz");
            else if(i%15==0)
                $('h3').append(" FizzBuzz");
            else    
                $('h3').append(" " + i);
        }
    }
    else{
        $('h3').append("Please Enter a Number");
    }
});